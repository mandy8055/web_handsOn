// Utility functions
function getById(id) {
  return document.getElementById(id);
}
// DOM elements
const imageElement = document.querySelector('img');
const audioElement = document.querySelector('audio');
const musicTitle = getById('title');
const musicArtist = getById('artist');
const prevBtn = getById('prev');
const nextBtn = getById('next');
const playBtn = getById('play');
const progressContainer = getById('progress-container');
const progress = getById('progress');
const currentTimeElement = getById('current-time');
const durationElement = getById('duration');

// Music info
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Electric Chill Music',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army (Remix)',
    artist: 'Jacinto Design',
  },
  {
    name: 'jacinto-3',
    displayName: 'Good Night, Disco Queen',
    artist: 'Jacinto Design',
  },
  {
    name: 'metric-1',
    displayName: 'Front Row (Remix)',
    artist: 'Metric/Jacinto Design',
  },
];

// check if playing
let isPlaying = false;

function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  audioElement.play();
}

function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  audioElement.pause();
}

// Event Listeners
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

function loadSong(song) {
  const { displayName, artist, name } = song;
  musicTitle.textContent = displayName;
  musicArtist.textContent = artist;
  audioElement.src = `music/${name}.mp3`;
  imageElement.src = `img/${name}.jpg`;
}

// Current song
let songIndex = 0;

function prevSong() {
  /* Another logic
  songIndex = songIndex <= 0 ? songs.length - 1 : --songIndex;
  console.log({ songIndex });
  */
  songIndex = songIndex <= 0 ? songs.length - 1 : --songIndex;
  loadSong(songs[songIndex]);
  playSong();
}

function nextSong() {
  /* Another logic  
  songIndex =
    songIndex >= songs.length - 1
      ? songIndex % (songs.length - 1)
      : ++songIndex;
  console.log({ songIndex });
  */
  songIndex = songIndex >= songs.length - 1 ? 0 : ++songIndex;
  loadSong(songs[songIndex]);
  playSong();
}

// onLoad - select first song
loadSong(songs[songIndex]);

// calculate display for duration and currentTime
function calculateAndDisplay(time, domEl) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  //   delay switching duration in order to avoid NaN
  if (seconds) {
    domEl.textContent = `${minutes}:${seconds}`;
  }
}

// function for handling progress bar and timings
function loadSongStats(duration, currentTime) {
  // Update Progress Bar width
  const progressPercentage = (currentTime / duration) * 100;
  progress.style.width = `${progressPercentage}%`;
  // calculate and display duration
  calculateAndDisplay(duration, durationElement);
  //   calculate and display currentTime
  calculateAndDisplay(currentTime, currentTimeElement);
}

// Update Progress Bar and time
function updateProgressBarTime(event) {
  if (isPlaying) {
    const { duration, currentTime } = event.srcElement;
    loadSongStats(duration, currentTime);
  }
}

function setProgressBar(event) {
  console.log(this.clientWidth);
  // Total width of the progress bar
  const width = this.clientWidth;
  // Place where the click happened
  const clickX = event.offsetX;
  const { duration } = audioElement;
  audioElement.currentTime = (clickX / width) * duration; // getting the current time in seconds and setting it to currentTime
}

// Event Listeners for previous and next button
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audioElement.addEventListener('ended', nextSong);
audioElement.addEventListener('timeupdate', updateProgressBarTime);
progressContainer.addEventListener('click', setProgressBar);
