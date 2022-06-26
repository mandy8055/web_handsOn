const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

// Calculate first and second value depending on operator
const calculate = {
  '/': (lVal, rVal) => lVal / rVal,
  '*': (lVal, rVal) => lVal * rVal,
  '+': (lVal, rVal) => lVal + rVal,
  '-': (lVal, rVal) => lVal - rVal,
  '=': (_, rVal) => rVal,
};

let lVal = 0;
let operatorValue = '';
let awaitingRVal = false;

function sendNumberValue(num) {
  // Replace current num value if the lVal is entered
  if (awaitingRVal) {
    calculatorDisplay.textContent = num;
    awaitingRVal = false;
  } else {
    // if current number is zero replace it, else append it.
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === '0' ? num : `${displayValue}${num}`;
  }
}

function addDecimal() {
  // if operator is pressed don't add decimal
  if (awaitingRVal) {
    return;
  }
  // If no decimal, add one
  if (!calculatorDisplay.textContent.includes('.')) {
    calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);
  // To prevent multiple operators
  if (operatorValue && awaitingRVal) {
    operatorValue = operator;
    return;
  }
  // Assign first value if no value
  if (!lVal) {
    lVal = currentValue;
  } else {
    const calculation = calculate[operatorValue](lVal, currentValue);
    calculatorDisplay.textContent = calculation;
    lVal = calculation;
  }
  awaitingRVal = true;
  operatorValue = operator;
}

// Reset all values, display
function resetAll() {
  lVal = 0;
  operatorValue = '';
  awaitingRVal = false;
  calculatorDisplay.textContent = '0';
}

// Add Event Listeners for numbers, operators and decimal buttons
inputBtns.forEach((inputBtn) => {
  if (inputBtn.classList.length === 0) {
    inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains('operator')) {
    inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
  } else if (inputBtn.classList.contains('decimal')) {
    inputBtn.addEventListener('click', () => addDecimal());
  }
});

// Event Listener for clearBtn
clearBtn.addEventListener('click', resetAll);
