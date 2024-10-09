let timerInterval;
let startTime;
let elapsedTime = 0;
let running = false;
let historyCount = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyList = document.getElementById('historyList');

const startTimer = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = timeToString(elapsedTime);
    }, 10);
}

const stopTimer = () => {
    clearInterval(timerInterval);
}

const timeToString = (time) => {
    let date = new Date(time);
    let hours = date.getUTCHours().toString().padStart(2, '0');
    let minutes = date.getUTCMinutes().toString().padStart(2, '0');
    let seconds = date.getUTCSeconds().toString().padStart(2, '0');
    let milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

startStopBtn.addEventListener('click', () => {
    if (!running) {
        startTimer();
        startStopBtn.textContent = 'Стоп';
        startStopBtn.classList.remove('start');
        startStopBtn.classList.add('stop');
    } else {
        stopTimer();
        startStopBtn.textContent = 'Старт';
        startStopBtn.classList.remove('stop');
        startStopBtn.classList.add('start');
        recordHistory();
    }
    running = !running;
});

resetBtn.addEventListener('click', () => {
    stopTimer();
    elapsedTime = 0;
    display.textContent = "00:00:00.000";
    running = false;
    startStopBtn.textContent = 'Старт';
    startStopBtn.classList.remove('stop');
    startStopBtn.classList.add('start');
});

clearHistoryBtn.addEventListener('click', () => {
    historyList.innerHTML = '';
    historyCount = 0;
    resetBtn.click();
});

const recordHistory = () => {
    historyCount++;
    const li = document.createElement('li');
    li.textContent = `Замер ${historyCount}: ${display.textContent}`;
    historyList.appendChild(li);
}
