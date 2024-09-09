"use strict";

const drumKeys = document.querySelectorAll(".drum-key");

window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(
    `audio[data-key="${e.key}"]`.toLowerCase()
  );
  const key = document.querySelector(
    `.drum-key[data-key="${e.key}"]`.toLowerCase()
  );
  // const lowerOpen =
  const openHat = document.querySelector(`audio[data-key="f"]`.toLowerCase());

  if (!audio) return;

  // Stop open hat from playing when closed hat is played:
  if (e.key.toLowerCase() === "s") {
    openHat.pause();
  }

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
});

drumKeys.forEach(function (key) {
  key.addEventListener("transitionend", function (e) {
    e.target.closest(".drum-key").classList.remove("playing");
  });
});
