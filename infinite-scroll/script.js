// DOM elements
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
// globals
let photosArray = [];
let areImagesReady = false;
let imagesLoaded = 0;
let totalImages = 0;
let isInitialLoad = true;

// Unsplash API
const ACCESS_KEY = 'pD5MGiMGEG2cVEqntKNDdjcTLB-71RUZBLD2YdM_-qw'; // Need to be hidden
let initialImgCount = 2;
// To get only random photos of nature.
const QUERY_PARAM = 'nature';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&query=${QUERY_PARAM}&count=${initialImgCount}`;

function updateAPIUrlWithNewCount(imgCount) {
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&query=${QUERY_PARAM}&count=${imgCount}`;
}

// Check if all image were loaded.
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    areImagesReady = true;
    loader.hidden = true;
  }
}

function setAttributesToDOMElements(element, attributeList) {
  for (const key in attributeList) {
    element.setAttribute(key, attributeList[key]);
  }
}

// Create elements for links and photos
function displayPhotos() {
  totalImages = photosArray.length;
  imagesLoaded = 0;
  photosArray.forEach((photo) => {
    // destructuring argument
    const {
      links: { html },
      urls: { regular },
      alt_description,
    } = photo;
    // Create <a> to link to unsplash
    const item = document.createElement('a');
    const itemAttributes = {
      href: html,
      target: '_blank',
    };
    setAttributesToDOMElements(item, itemAttributes);
    // Create img element for photos
    const img = document.createElement('img');
    const imgAttributes = {
      src: regular,
      alt: alt_description ? alt_description : 'Image',
      title: alt_description ? alt_description : 'Image',
    };
    setAttributesToDOMElements(img, imgAttributes);
    // trigger event listener when each image inside a single batch finishes loading.
    img.addEventListener('load', imageLoaded);
    // Put <img> inside <a>, then put both inside imageContainer.
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from unsplash API.
async function getPhotos() {
  try {
    const res = await fetch(apiUrl);
    photosArray = await res.json();
    displayPhotos();
    if (isInitialLoad) {
      updateAPIUrlWithNewCount(30);
      isInitialLoad = false;
    }
  } catch (err) {
    // Handle error here
  }
}

// Check to see if scrolling has happened near the bottom of the page, to load more photos
window.addEventListener('scroll', () => {
  if (
    window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000 &&
    areImagesReady
  ) {
    areImagesReady = false;
    // load more photos
    getPhotos();
  }
});

// On load
getPhotos();
