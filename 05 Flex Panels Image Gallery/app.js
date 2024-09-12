"use strict";

const panels = document.querySelectorAll(".panel");

panels.forEach(function (panel) {
  panel.addEventListener("click", function (e) {
    // Check if any panel is open when clicking another panel and close the open panels:
    let clicked = e.target.closest(".panel"); // grabbing the clicked panel
    // Closing all the panels that are clicked, but leaving the clicked panel untouched:
    panels.forEach(function (p) {
      if (p !== clicked) {
        p.classList.remove("open");
        p.classList.remove("open-active");
      }
    });

    // Toggling panel that was clicked:
    panel.classList.toggle("open");
    panel.classList.toggle("open-active");
  });
});
