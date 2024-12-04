const startButton = document.getElementById('start1')
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const display = document.getElementById('timer-display');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

let timerInterval;
let startTime;
let elapsedTime = 0;
let remainingTime;

function startTimer() {
    if (timerInterval) return;

    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    remainingTime = (minutes * 60 + seconds) * 1000;

    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);
    toggleButtons(true);
}

function updateTimer() {
    const now = Date.now();
    elapsedTime = now - startTime;

    let timeLeft = remainingTime - elapsedTime;

    if (timeLeft < 0) {
        timeLeft = 0;
        clearInterval(timerInterval);
        timerInterval = null;
        toggleButtons(false);
    }

    const minutes = Math.floor(timeLeft / 60000);
    const seconds = Math.floor((timeLeft % 60000) / 1000);
    const fractions = Math.floor((timeLeft % 1000) / 10);

    display.textContent =
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') + ':' +
        String(fractions).padStart(2, '0');
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
        remainingTime -= elapsedTime;
        toggleButtons(false);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    remainingTime = 0;
    display.textContent = '00:00:00';
    toggleButtons(false);
}

function toggleButtons(isRunning) {
    if (isRunning) {
        startButton.classList.add('hidden');
        stopButton.classList.remove('hidden');
        resetButton.classList.remove('hidden');
    } else {
        startButton.classList.remove('hidden');
        stopButton.classList.add('hidden');
        resetButton.classList.add('hidden');
    }
}

startButton.addEventListener('click', startTimer);

stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);