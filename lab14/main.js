const gameBoard = document.getElementById('game-board');
const resultDisplay = document.getElementById('result');
const catScoreDisplay = document.getElementById('cat-score');
const mouseScoreDisplay = document.getElementById('mouse-score');
const roundCountDisplay = document.getElementById('round-count');
const resetButton = document.getElementById('reset-button');

const catIcon = '🐱';
const mouseIcon = '🐭';
const boardSize = 5;
const winCondition = 3;

let board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
let isCatTurn = true;
let catScore = 0;
let mouseScore = 0;
let roundCount = 1;

function initGame() {
    gameBoard.innerHTML = '';
    board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
    isCatTurn = true;
    resultDisplay.textContent = '';
    resetButton.style.display = 'none';

    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener('click', makeMove);
            gameBoard.appendChild(cell);
        }
    }
}

function makeMove(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;

    if (board[row][col] || resultDisplay.textContent) return;

    board[row][col] = isCatTurn ? 'cat' : 'mouse';
    event.target.textContent = isCatTurn ? catIcon : mouseIcon;

    if (checkWin(row, col)) {
        resultDisplay.textContent = isCatTurn ? 'Крестики победили!' : 'Нолики победили!';
        if (isCatTurn) {
            catScore++;
            catScoreDisplay.textContent = catScore;
        } else {
            mouseScore++;
            mouseScoreDisplay.textContent = mouseScore;
        }
        roundCount++;
        roundCountDisplay.textContent = roundCount;
        resetButton.style.display = 'block';
    } else if (board.flat().every(cell => cell)) {
        resultDisplay.textContent = 'Ничья!';
        roundCount++;
        roundCountDisplay.textContent = roundCount;
        resetButton.style.display = 'block';
    } else {
        isCatTurn = !isCatTurn;
    }
}

function checkWin(row, col) {
    const currentPlayer = board[row][col];

    const directions = [
        { dr: 1, dc: 0 }, { dr: 0, dc: 1 },
        { dr: 1, dc: 1 }, { dr: 1, dc: -1 }
    ];

    for (let { dr, dc } of directions) {
        let count = 1;
        for (let i = 1; i < winCondition; i++) {
            const r = parseInt(row) + dr * i;
            const c = parseInt(col) + dc * i;
            if (r < 0 || c < 0 || r >= boardSize || c >= boardSize || board[r][c] !== currentPlayer) break;
            count++;
        }
        for (let i = 1; i < winCondition; i++) {
            const r = parseInt(row) - dr * i;
            const c = parseInt(col) - dc * i;
            if (r < 0 || c < 0 || r >= boardSize || c >= boardSize || board[r][c] !== currentPlayer) break;
            count++;
        }
        if (count >= winCondition) return true;
    }
    return false;
}

initGame();