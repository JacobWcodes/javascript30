"use strict";

// Get elements:
const player = document.querySelector(".player");
const video = document.querySelector("video");
const btnPlay = document.querySelector(".play");
const btnRewind = document.querySelector(".rewind");
const btnForward = document.querySelector(".forward");
const inputVol = document.querySelector(".vol");
const inputSpeed = document.querySelector(".speed");
const progressFilled = document.querySelector(".progress-filled");
const progressBar = document.querySelector(".progress");
// Build functions for the elements to work:

// Playing/Pausing video function:
function playPause() {
  video.paused
    ? (video.play(), (btnPlay.textContent = "❚❚"))
    : (video.pause(), (btnPlay.textContent = "▶"));
}

// Skip forwards:
function skipForward() {
  video.currentTime += parseFloat(this.dataset.skip);
  console.log(video.currentTime);
}

// Skip backwards:
function skipRewind() {
  video.currentTime += parseFloat(this.dataset.skip);
  console.log(video.currentTime);
}

// Adjust volume:
function videoVol() {
  video.volume = this.value;
}

// Adjust playback speed:
function videoSpeed() {
  video.playbackRate = this.value;
}

// Progress bar:
function showProgress() {
  const videoProgressBar = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${videoProgressBar}%`;
}

// move video on mouse click
function moveProgress(e) {
  const moveToTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = moveToTime;
}

// Hook up to event listeners:
btnPlay.addEventListener("click", playPause); // Event listener for play/pause button click.
video.addEventListener("click", playPause); // Event listener to play/pause when video is clicked.
video.addEventListener("timeupdate", showProgress); // Updating filled progress bar everytime the time update runs.
btnForward.addEventListener("click", skipForward); // Event listener for skiping video forward.
btnRewind.addEventListener("click", skipRewind); // Event listener for skip rewinding video.
inputVol.addEventListener("input", videoVol); // Event listener for adjusting video volume.
inputSpeed.addEventListener("input", videoSpeed); // Event listener for adjusting playback speed.
progressBar.addEventListener("click", moveProgress); // Event listener for moving video with click.

// Moving video with mouse drag:
let mousedown = false; // default
progressBar.addEventListener("mousemove", function (e) {
  if (mousedown) {
    moveProgress(e);
  }
});

progressBar.addEventListener("mousedown", () => (mousedown = true)); // Setting to true so that when mouse is moved while mouse click the mousemove event actually updates the progress.

progressBar.addEventListener("mouseup", () => (mousedown = false)); // Setting mousedown to its default state to prevent video progress from moving when mouse is not clicked.
