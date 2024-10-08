const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let timerInterval;
let elapsedTime = 0;

function startTimer() {
  const startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerDisplay.textContent = formatTime(elapsedTime);
  }, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerDisplay.textContent = "00:00:00";

  startBtn.disabled = false;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
}

function formatTime(timeInMilliseconds) {
  const totalSeconds = Math.floor(timeInMilliseconds / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
