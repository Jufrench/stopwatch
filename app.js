// Variables
let timeCount = document.getElementById('time-count');
let count = 0;
let run;
let intervalState = false;

// Execute
startButtonReady();
resetButtonReady();
recordButtonReady();

// Functions
function startTimer() {
  intervalState = true;
  run = setInterval(function() {
    count++;
    timeCount.innerHTML = count / 100;
    console.log(count);
  }, 10);
}

function stopTimer() {
  intervalState = false;
  clearInterval(run);
}

function resetTimer() {
  stopTimer();
  timeCount.innerHTML = 0;
  document.getElementById('past-times').innerHTML = '';
}

function recordTime() {
  let li = document.createElement('li');
  let countText = document.createTextNode(count / 100);
  li.appendChild(countText);
  document.getElementById('past-times').appendChild(li);
}

// Event Listeners

// Start/Stop Button Event Listener
function startButtonReady() {
  document.getElementById('start-stop').addEventListener('click', function() {
    if (!intervalState) {
      startTimer();
    } else {
      stopTimer();
    }
  });
}

// Reset Button Event Listener
function resetButtonReady() {
  document.getElementById('reset-button').addEventListener('click', function() {
    resetTimer();
  });
}

// Record Time Button Event Listener
function recordButtonReady() {
  document.getElementById('record-button').addEventListener('click', function() {
    recordTime();
  });
}

// Event listener for keydowns
document.addEventListener('keydown', function(event) {
  if (event.key === 's') {
    if (!intervalState) {
      startTimer();
    } else {
      stopTimer();
    }
  }
  if (event.key === 'r') {
    resetTimer();
  }
  if (event.key === 't') {
    recordTime();
  }
});
