"use strict";

// function updateClock() {
//   const clock = document.getElementById("clock");
//   let now = new Date().toLocaleTimeString("en-US");
//   clock.innerText = now;
// }

// setInterval(updateClock, 1000);

const clock = document.getElementById("clock");


const names = [
  "Liam",
  "Sofia",
  "Ethan",
  "Isabella",
  "Hiroshi",
  "Amina",
  "Mateo",
  "Anika",
  "Kofi",
  "Freya"
];

let random = Math.floor(Math.random() * names.length);
console.log(names[random])