"use strict";

const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#Bada55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 0;
// ctx.globalCompositeOperation = "multiply";

let hue = 0;
let direction = true;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  if (!isDrawing) return; // Stop function when not moused
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  // Start from:
  ctx.moveTo(lastX, lastY);
  // Go to:
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  lastX = e.offsetX;
  lastY = e.offsetY;

  hue++;
  if (hue > 360) hue = 0;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", function (e) {
  isDrawing = true; // flag
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mouseup", function () {
  return (isDrawing = false);
});

canvas.addEventListener("mouseout", function () {
  return (isDrawing = false);
});
