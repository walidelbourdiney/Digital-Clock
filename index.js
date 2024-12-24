"use strict";

function updateClock() {
  const clock = document.getElementById("clock");
  let now = new Date().toLocaleTimeString("en-US");
  clock.innerText = now;
}

setInterval(updateClock, 1000);
