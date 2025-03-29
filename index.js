"use strict";

// function updateClock() {
//   const clock = document.getElementById("clock");
//   let now = new Date().toLocaleTimeString("en-US");
//   clock.innerText = now;
// }

// setInterval(updateClock, 1000);

const clock = document.getElementById("clock");

// const names = [
//   "Liam",
//   "Sofia",
//   "Ethan",
//   "Isabella",
//   "Hiroshi",
//   "Amina",
//   "Mateo",
//   "Anika",
//   "Kofi",
//   "Freya"
// ];

// let random = Math.floor(Math.random() * names.length);
// // console.log(names[random])

// console.log(names.slice().reverse())

// let numbers = [1,2,3,4,5,6,7,8,9]
// console.log(numbers)
// ----------------------------------------------------------------- //
//generate Password:

// function generatePassword(max, lower, upper, numbers, symbols){

// const lowerCase = 'abcdefghijklmnopq'
// const upperCase = 'ABCDEFGHIJKLMNOPQ'
// const numberss = '1234567890'
// const symbolss = '!@#$%^&*()_+'

// let allowedCharacters = ''
// let passWord = ''

// allowedCharacters += lower? lowerCase: '';
// allowedCharacters += upper? upperCase: '';
// allowedCharacters += numbers? numberss: '';
// allowedCharacters += symbols? symbolss: '';

// for(let i=0;i<max;i++){
//     let random = Math.floor(Math.random() * allowedCharacters.length) + 1
//     passWord += allowedCharacters[random];
// }

// return passWord;

// }
// let x= generatePassword(12, true, true, true, true)
// console.log(x);

// function Car(model, year, color) {
//   (this.model = model), (this.year = year), (this.color = color);
// }

// const car1 = new Car("honda", 1990, "yellow");
// console.log(car1);

// class Car {
//   constructor(model, year) {
//     this.model = model;
//     this.year = year;
//   }
//   details() {
//     console.log(`you drive ${this.model} ${this.year}`);
//   }
// }

// const car1 = new Car("honda", 1990);

// console.log(car1.details());

function startCountdown(targetDate) {
  function updateTimer() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
      clock.innerHTML = "Countdown Expired!";
      clearInterval(interval);
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    clock.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateTimer(); // Call once immediately
  const interval = setInterval(updateTimer, 1000);
}

// Set target date to April 8, 2015 at 12 AM
const targetDate = new Date("April 8, 2025 00:00:00").getTime();
startCountdown(targetDate);
