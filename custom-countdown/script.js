// Utility functions
const gById = (id) => document.getElementById(id);
// DOM constants
const inputContainer = gById('input-container');
const countdownForm = gById('countdown-form');
const dateEl = gById('date-picker');

const countdownEl = gById('countdown');
const countdownElTitle = gById('countdown-title');
const countdownElButton = gById('countdown-button');
const timeElements = document.querySelectorAll('span');

const completeEl = gById('complete');
const completeElInfo = gById('complete-info');
const completeButton = gById('complete-button');

// globals
let countdownTitle = '';
let countdownDate = '';
let countdownValue = new Date();
let countdownActive;
let savedCountdown;

// constants for time
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// Set date input minimum with today's date.
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Populate countdown / complete UI
function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const timeElapsed = countdownValue - now;
    const days = Math.floor(timeElapsed / DAY);
    const hours = Math.floor((timeElapsed % DAY) / HOUR);
    const minutes = Math.floor((timeElapsed % HOUR) / MINUTE);
    const seconds = Math.floor((timeElapsed % MINUTE) / SECOND);

    // Hide input
    inputContainer.hidden = true;

    // If countdown has ended, show countdown complete
    if (timeElapsed < 0) {
      countdownEl.hidden = true;
      clearInterval(countdownActive);
      completeElInfo.textContent = `${countdownTitle} got finished on ${countdownDate}`;
      completeEl.hidden = false;
    } else {
      // show the countdown in progress
      // Populate countdown
      countdownElTitle.textContent = `${countdownTitle}`;
      timeElements[0].textContent = `${days}`;
      timeElements[1].textContent = `${hours}`;
      timeElements[2].textContent = `${minutes}`;
      timeElements[3].textContent = `${seconds}`;
      // Hide the completeEl
      completeEl.hidden = true;
      // Show countdown
      countdownEl.hidden = false;
    }
  }, SECOND);
}

function updateCountdown(event) {
  event.preventDefault();
  const {
    srcElement: {
      0: { value: titleVal },
      1: { value: dateVal },
    },
  } = event;
  countdownTitle = titleVal;
  countdownDate = dateVal;
  savedCountdown = { countdownTitle, countdownDate };
  localStorage.setItem('countdown', JSON.stringify(savedCountdown));
  if (!countdownDate) {
    alert('Please enter a valid date');
  } else {
    //   Get number version of current date, update DOM
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }
}

// Reset all values
function reset() {
  countdownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countdownActive);
  // Reset values
  countdownTitle = '';
  countdownDate = '';
  localStorage.removeItem('countdown');
}

function restorePreviousCountdown() {
  // Get countdown from local storage if available
  const getCountdownFromLocalStorage = localStorage.getItem('countdown');
  if (getCountdownFromLocalStorage) {
    inputContainer.hidden = true;
    savedCountdown = JSON.parse(getCountdownFromLocalStorage);
    countdownDate = savedCountdown.countdownDate;
    countdownTitle = savedCountdown.countdownTitle;
    // Get number version of current date, update DOM
    countdownValue = new Date(countdownDate).getTime();
    updateDOM();
  }
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
countdownElButton.addEventListener('click', reset);
completeButton.addEventListener('click', reset);

// On Load, check local storage
restorePreviousCountdown();
