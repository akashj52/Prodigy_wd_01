let hours = 0, minutes = 0, seconds = 0;
let timer = null;
let running = false;

const timeDisplay = document.getElementById('time');
const lapsList = document.getElementById('laps');

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const formattedTime = 
    `${hours.toString().padStart(2,'0')}:` +
    `${minutes.toString().padStart(2,'0')}:` +
    `${seconds.toString().padStart(2,'0')}`;
  timeDisplay.textContent = formattedTime;
}

document.getElementById('start').addEventListener('click', () => {
  if (!running) {
    timer = setInterval(updateTime, 1000);
    running = true;
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
  running = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  running = false;
  hours = minutes = seconds = 0;
  timeDisplay.textContent = '00:00:00';
  lapsList.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (running) {
    const lapTime = timeDisplay.textContent;
    const li = document.createElement('li');
    li.textContent = lapTime;
    lapsList.appendChild(li);
  }
});
