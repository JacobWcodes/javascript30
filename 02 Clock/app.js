"use strict";

const hourHand = document.querySelector(".hour");
const minsHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

const time = function () {
  const timeNow = new Date();
  const second = timeNow.getSeconds();
  const minute = timeNow.getMinutes();
  const hour = timeNow.getHours();
  const secondDegrees = (second / 60) * 360 + 90;
  const minuteDegrees = (minute / 60) * 360 + 90;
  const hourDegrees = (hour / 12) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minsHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  //   console.log(`${hour}:${minute}:${second}`);
};

setInterval(time, 1000);
