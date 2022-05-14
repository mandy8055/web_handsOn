// DOM Elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loaderSpinner = document.getElementById('loader');

let apiQuotes = [];

function showLoadingSpinner() {
  loaderSpinner.hidden = false;
  quoteContainer.hidden = true;
}

function hideLoadingSpinner() {
  loaderSpinner.hidden = true;
  quoteContainer.hidden = false;
}

// Show new Quote
function newQuote() {
  showLoadingSpinner();
  // get random Index from a list of apiQuotes
  const randomIndex = Math.floor(Math.random() * apiQuotes.length) - 1;
  const { text, author } = apiQuotes[randomIndex];
  authorText.textContent = author ? author : 'Unknown';
  // Check quote length to determine the styling.
  text.length > 75
    ? quoteText.classList.add('long-text')
    : quoteText.classList.remove('long-text');
  // Set the Quote and hide the loader.
  quoteText.textContent = text;
  hideLoadingSpinner();
}
// Get the quotes from an API
async function getQuotes() {
  showLoadingSpinner();
  const API_URL = 'https://type.fit/api/quotes';
  try {
    const res = await fetch(API_URL);
    apiQuotes = await res.json();
    console.log(apiQuotes);
    newQuote();
  } catch (err) {
    // Catch the error here
  }
}

// Tweet the quote
function tweetQuote() {
  const TWITTER_URL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(TWITTER_URL, '_blank');
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes();
