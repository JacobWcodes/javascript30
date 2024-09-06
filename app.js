"use strict";

const drumKeys = document.querySelectorAll(".drum-key");

drumKeys.forEach(function (key) {
  key.addEventListener("mousedown", function (e) {
    e.target.closest(".drum-key").classList.toggle("playing");
  });

  key.addEventListener("mouseup", function (e) {
    e.target.closest(".drum-key").classList.remove("playing");
  });
});

// window.addEventListener("keydown", function (e) {
//   console.log(e);
// });
