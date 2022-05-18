// Utility functions
function getById(id) {
  return document.getElementById(id);
}

// DOM Elements
const menuBars = getById('menu-bars');
const overlay = getById('overlay');
const nav1 = getById('nav-1');
const nav2 = getById('nav-2');
const nav3 = getById('nav-3');
const nav4 = getById('nav-4');
const nav5 = getById('nav-5');
const navs = [nav1, nav2, nav3, nav4, nav5];

// Control Animations
function animateNavsFrom(directionFrom, directionTo) {
  navs.forEach((nav, i) =>
    nav.classList.replace(
      `slide-${directionFrom}-${i + 1}`,
      `slide-${directionTo}-${i + 1}`
    )
  );
}

// Utility functions

function toggleNav() {
  // Toggle Menu bars open / closed
  menuBars.classList.toggle('change');
  //   Toggling the menu to be active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animate in - overlay
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // Animate in nav items
    animateNavsFrom('out', 'in');
  } else {
    // Animate out - overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // Animate out nav items
    animateNavsFrom('in', 'out');
  }
}

//Event Listeners
menuBars.addEventListener('click', toggleNav);
navs.forEach((nav) => nav.addEventListener('click', toggleNav));
