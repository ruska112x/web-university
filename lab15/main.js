let secretNumber = generateNumber();
let attempts = 0;

function generateNumber() {
    let digits = [];
    while (digits.length < 4) {
        let randomDigit = Math.floor(Math.random() * 10);
        if (digits.length === 0 && randomDigit === 0) continue;
        if (!digits.includes(randomDigit)) digits.push(randomDigit);
    }
    return digits.join('');
}

function makeGuess() {
    const guess = document.getElementById('guessInput').value;
    if (guess.length !== 4 || new Set(guess).size !== 4) {
        alert("Введите четырёхзначное число без повторяющихся цифр.");
        return;
    }

    attempts++;
    const result = checkGuess(guess);
    const historyElement = document.getElementById('history');
    const newHistoryEntry = document.createElement('p');
    newHistoryEntry.textContent = `Попытка ${attempts}: ${guess} - ${result.bulls} Бык(ов), ${result.cows} Коров(ы)`;
    historyElement.appendChild(newHistoryEntry);

    if (result.bulls === 4) {
        alert(`Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток.`);
        resetGame();
    }
    document.getElementById('guessInput').value = '';
}

function checkGuess(guess) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretNumber[i]) {
            bulls++;
        } else if (secretNumber.includes(guess[i])) {
            cows++;
        }
    }
    return { bulls, cows };
}

function resetGame() {
    secretNumber = generateNumber();
    attempts = 0;
    document.getElementById('history').innerHTML = '';
}

function showRules() {
    document.getElementById('rulesModal').style.display = 'flex';
}

function closeRules() {
    document.getElementById('rulesModal').style.display = 'none';
}