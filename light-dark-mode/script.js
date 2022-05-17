// Utility function
function getById(id) {
  return document.getElementById(id);
}

// DOM elements
const nav = getById('nav');
const toggleIcon = getById('toggle-icon');
const image1 = getById('image1');
const image2 = getById('image2');
const image3 = getById('image3');
const textBox = getById('text-box');
const toggleSwitch = document.querySelector('input[type="checkbox"]');

const DARK_MODE = 'dark';
const LIGHT_MODE = 'light';
const WHITE_RGB_COLOR = 'rgb(255 255 255 / 50%)';
const BLACK_RGB_COLOR = 'rgb(0 0 0 / 50%)';

// dark or light image
function imageMode(themeColor) {
  image1.src = `img/undraw_proud_coder_${themeColor}.svg`;
  image2.src = `img/undraw_feeling_proud_${themeColor}.svg`;
  image3.src = `img/undraw_conceptual_idea_${themeColor}.svg`;
}

function darkLightMode(mode) {
  if (mode === LIGHT_MODE) {
    nav.style.backgroundColor = WHITE_RGB_COLOR;
    textBox.style.backgroundColor = BLACK_RGB_COLOR;
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode(LIGHT_MODE);
  } else {
    nav.style.backgroundColor = BLACK_RGB_COLOR;
    textBox.style.backgroundColor = WHITE_RGB_COLOR;
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode(DARK_MODE);
  }
}

// Switch theme dynamically
function switchTheme(event) {
  const {
    target: { checked },
  } = event;
  if (checked) {
    document.documentElement.setAttribute('data-theme', DARK_MODE);
    localStorage.setItem('theme', DARK_MODE);
    darkLightMode(DARK_MODE);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_MODE);
    localStorage.setItem('theme', LIGHT_MODE);
    darkLightMode(LIGHT_MODE);
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme on the initial load
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === DARK_MODE) {
    toggleSwitch.checked = true;
    darkLightMode(DARK_MODE);
  }
}
