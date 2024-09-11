"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", open);
  panel.addEventListener("transitionend", active);
});

function open() {
  this.classList.toggle("open");
}

function active(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
