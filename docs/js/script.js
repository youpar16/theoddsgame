"use strict";

// The range for the odds
let range = 20;
// Initialize a random value that will be used
let randomNumber = Math.trunc(Math.random() * range) + 1;

// Function to display our message on the main-screen
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// When the check button is pressed
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input-field").value);

  // No Inpuit
  if (!guess) {
    displayMessage("😣 No Number Inputed");
    // Correct Input
  } else if (guess === randomNumber) {
    displayMessage("🥳 Same Number! DO IT!!!");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("#main-screen").style.backgroundColor = "#24973c";
    // Input too high
  } else if (guess > randomNumber) {
    document.querySelector(".message").textContent =
      "🙅🏽‍♂️ Number too high! DON'T DO IT!!!";
    // Input too low
  } else if (guess < randomNumber) {
    displayMessage("🙅🏽‍♂️ Number too low! DON'T DO IT!!!");
  }
});

// Increasing and decreasing the range
document.querySelector(".right").addEventListener("click", function () {
  range++;
  randomNumber = Math.trunc(Math.random() * range) + 1;
  document.querySelector(".message").textContent = "Input Your Number...";
  document.querySelector(".between").textContent = `(Between 1 and ${range})`;
  document.querySelector("#main-screen").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
});
document.querySelector(".left").addEventListener("click", function () {
  if (range === 1) {
    displayMessage("❌ Range Can't go Below 1");
  } else {
    range--;
    randomNumber = Math.trunc(Math.random() * range) + 1;
    document.querySelector(".message").textContent = "Input Your Number...";
    document.querySelector(".between").textContent = `(Between 1 and ${range})`;
    document.querySelector("#main-screen").style.backgroundColor = "black";
    document.querySelector(".number").textContent = "?";
  }
});

// Upon Pressing the Again! button
document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * range) + 1;
  document.querySelector(".message").textContent = "Input Your Number...";
  document.querySelector(".between").textContent = `(Between 1 and ${range})`;
  document.querySelector("#main-screen").style.backgroundColor = "black";
  document.querySelector(".number").textContent = "?";
});

// Bringing up Message Instructions
const red = document.querySelector(".red-circle");
const yellow = document.querySelector(".yellow-circle");

red.addEventListener("click", function () {
  document.querySelector(".message-2").style.display = "none";
  document.querySelector(".message-1").style.display = "block";
});
yellow.addEventListener("click", function () {
  document.querySelector(".message-1").style.display = "none";
  document.querySelector(".message-2").style.display = "block";
});
