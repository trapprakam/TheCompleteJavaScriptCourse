'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // Random number betweeen 1 - 20
const numberElement = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const guessElement = document.querySelector('.guess');
const scoreElement = document.querySelector('.score');
const againElement = document.querySelector('.again');
const highScoreElement = document.querySelector('.highscore');
const bodyElement = document.querySelector('body');
let score = 20;
let highScore = 0;

// Evaluate guess made by the user
const evaluateGuess = function () {
  const guess = Number(guessElement.value);
  // No input
  if (!guess) {
    messageElement.textContent = '⛔️  No number was provided!';
  } else if (guess === secretNumber) {
    // Guess is correct
    messageElement.textContent = '🎉  Correct Number';
    // Change HTML to winning display
    numberElement.textContent = secretNumber;
    bodyElement.style.backgroundColor = '#60b347';
    numberElement.style.width = '30rem';
    // Set the high score
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  } else if (score > 1) {
    // Guess is incorrect, but user still have a chance to guess again
    messageElement.textContent =
      guess > secretNumber ? '📈  Too high!' : '📉  Too low!';
    score--;
    scoreElement.textContent = score;
  } else {
    // Guess incorrect, no more guesses allowed
    messageElement.textContent = '💥  You lost the game!';
  }
};

// Event listener for guesses made by the user when the check button is clicked.
document.querySelector('.check').addEventListener('click', evaluateGuess);
// Event listener for guesses made by the user when the enter key is pressed.
document.addEventListener('keydown', function (keyboardEvent) {
  if (keyboardEvent.key === 'Enter') {
    evaluateGuess();
  }
});

////////////////////////////////////////////////////////////////////////////////
//// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess!

1. Select the element with 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the score and number variables.
3. Restore the initial conditions of the message, number, score and guess input field
4. Also, restore the original background color (#222) and number width (15rem)
*/
againElement.addEventListener('click', function () {
  // Reset secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset score
  score = 20;
  scoreElement.textContent = score;
  // Reset number
  numberElement.textContent = '?';
  // Reset message
  messageElement.textContent = 'Start guessing...';
  // Reset guess
  guessElement.value = '';
  // Rest background
  bodyElement.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
});
