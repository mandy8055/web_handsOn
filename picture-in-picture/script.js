// DOM elements
const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => videoElement.play();
  } catch (err) {
    // Catch errors
  }
}

buttonElement.addEventListener('click', async () => {
  // Disable the button
  buttonElement.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset the button
  buttonElement.disabled = false;
});

// on load
selectMediaStream();
