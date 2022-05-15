// DOM elements
const buttonElement = document.getElementById('button');
const audioElement = document.getElementById('audio');

//global constants
const JOKE_API_URL =
  'https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
const VOICE_RSS_API_KEY = '71028b9e51e444f4ac5b9e019ca52764'; // Need to be hidden

// Disable/Enable button
function toggleButton() {
  buttonElement.disabled = !buttonElement.disabled;
}

// Passing joke to RSS tts API
function tellAJoke(joke) {
  VoiceRSS.speech({
    key: VOICE_RSS_API_KEY,
    src: joke,
    hl: 'en-in',
    v: 'Ajit',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

// Get jokes
async function getJokes() {
  let joke = '';
  try {
    const res = await fetch(JOKE_API_URL);
    const response = await res.json();
    joke =
      response.type === 'single'
        ? response.joke
        : `${response.setup}...Well!${response.delivery}`;
    // Text-To-Speech
    tellAJoke(joke);
    // Disable the button
    toggleButton();
  } catch (error) {
    // Catch errors here
  }
}
// Event listeners
buttonElement.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
