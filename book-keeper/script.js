// Utility functions
const gBId = (id) => document.getElementById(id);
const addRemoveClass = (action, classList, elementDOM) =>
  action === 'add'
    ? elementDOM.classList.add(...classList)
    : action === 'remove'
    ? elementDOM.classList.remove(...classList)
    : false;
// DOM elements
const modal = gBId('modal');
const modalShow = gBId('show-modal');
const modalClose = gBId('close-modal');
const bookmarkForm = gBId('bookmark-form');
const websiteNameEl = gBId('website-name');
const websiteURLEl = gBId('website-url');
const bookmarksContainer = gBId('bookmarks-container');

let bookmarks = [];

// Show Modal, Focus on Input
function showModal() {
  addRemoveClass('add', ['show-modal'], modal);
  websiteNameEl.focus();
}

// Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () =>
  addRemoveClass('remove', ['show-modal'], modal)
);
window.addEventListener('click', (e) =>
  e.target === modal ? addRemoveClass('remove', ['show-modal'], modal) : false
);

// Validate Form
function validate(nameVal, urlVal) {
  const expr =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expr);
  if (!nameVal || !urlVal) {
    alert('Please submit values for both fields');
    return false;
  }
  if (!urlVal.match(regex)) {
    alert('Please provide a valid web address...');
    return false;
  }
  return true;
}

// Build bookmarks DOM
function buildBookmarks() {
  // Remove all bookmarks element
  bookmarksContainer.textContent = '';
  // Buil items
  bookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;
    // Item
    const item = document.createElement('div');
    addRemoveClass('add', ['item'], item);
    // Close icon
    const closeIcon = document.createElement('i');
    addRemoveClass('add', ['fa-solid', 'fa-xmark'], closeIcon);
    closeIcon.setAttribute('title', 'Delete Bookmark');
    closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`);
    // Favicon / Link container
    const linkInfo = document.createElement('div');
    addRemoveClass('add', ['name'], linkInfo);
    // Favicon
    const favicon = document.createElement('img');
    favicon.setAttribute(
      'src',
      `https://www.google.com/s2/u/0/favicons?domain=${url}`
    );
    favicon.setAttribute('alt', 'Favicon');
    // Link
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.textContent = name;
    // Append to bookmarks container
    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);
    bookmarksContainer.appendChild(item);
  });
}

// Fetch bookmarks
function fetchBookmarks() {
  // Get Bookmarks from localstorage if available
  if (localStorage.getItem('bookmarks')) {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  } else {
    // Create bookmarks array in local storage
    bookmarks = [
      {
        name: 'mandy8055',
        url: 'https://mandy8055.github.io/',
      },
    ];
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  buildBookmarks();
}

// Delete Bookmark
function deleteBookmark(url) {
  bookmarks.forEach((bookmark, idx) => {
    if (bookmark.url === url) {
      bookmarks.splice(idx, 1);
    }
  });
  // Update bookmarks array in localStorage, re-populate DOM
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks();
}

// Handle data from Form
function storeBookmark(event) {
  event.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteURLEl.value;
  if (!urlValue.includes('http://') && !urlValue.includes('https://')) {
    urlValue = `https://${urlValue}`;
  }
  if (!validate(nameValue, urlValue)) {
    return false;
  }
  const bookmark = {
    name: nameValue,
    url: urlValue,
  };
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks();
  bookmarkForm.reset();
  websiteNameEl.focus();
}
// Event listener
bookmarkForm.addEventListener('submit', storeBookmark);

// On Load, fetch bookmarks
fetchBookmarks();
