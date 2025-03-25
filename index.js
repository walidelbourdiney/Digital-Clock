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

function generatePassword(max, lower, upper, numbers, symbols){

const lowerCase = 'abcdefghijklmnopq'
const upperCase = 'ABCDEFGHIJKLMNOPQ'
const numberss = '1234567890'
const symbolss = '!@#$%^&*()_+'

let allowedCharacters = ''
let passWord = ''

allowedCharacters += lower? lowerCase: '';
allowedCharacters += upper? upperCase: '';
allowedCharacters += numbers? numberss: '';
allowedCharacters += symbols? symbolss: '';

for(let i=0;i<max;i++){
    let random = Math.floor(Math.random() * allowedCharacters.length) + 1
    passWord += allowedCharacters[random];
}

return passWord;



}
let x= generatePassword(12, true, true, true, true)
console.log(x);