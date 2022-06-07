const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

// Validate Form
function validateForm() {
  // Using contraint API
  isValid = form.checkValidity();
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }
  // Check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make Sure the passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }
  //   If form is valid and passwords match
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const {
    fullName: { value: name },
    phone: { value: phone },
    email: { value: email },
    webUrl: { value: webUrl },
    password: { value: password },
  } = form;
  const user = {
    name,
    phone,
    email,
    webUrl,
    password,
  };
  //   Do something with data
  console.log(user);
}

function processFormData(event) {
  event.preventDefault();
  // Validate Form
  validateForm();
  //   Submit Data
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener('submit', processFormData);
