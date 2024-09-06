"use strict";

const drumKeys = document.querySelectorAll(".drum-key");

drumKeys.forEach(function (key) {
  key.addEventListener("click", function (e) {
    e.target.closest(".drum-key").classList.add("playing");
  });
});
