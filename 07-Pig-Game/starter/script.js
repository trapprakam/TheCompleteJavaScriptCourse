'use strict';

// Variables
const player1Element = document.querySelector('.player--0');
const player2Element = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const player1CurrentScore = document.querySelector('#current--0');
const player2CurrentScore = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore;
let activePlayer; // Player one always go first
let playing; // Used to disable buttons when a player wins
let scores = [0, 0];

// Starting conditions
function init() {
  // Set all scores to zero
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1Element.classList.remove('player--winner');
  player2Element.classList.remove('player--winner');
  player1Element.classList.add('player--active');
  player2Element.classList.remove('player--active');
  diceElement.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; // Player one always go first
  playing = true; // Used to disable buttons when a player wins
}

init(); // Start the game

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceElement.src = `dice-${dice}.png`;
    diceElement.classList.remove('hidden');

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // Update active player score
      currentScore += dice;
      updateActivePlayerScore();
    } else {
      // Switch Player
      switchPlayer();
    }
  }
});

// Hold button functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    // !. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      playing = false;
      // Active Player Wins!
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// New button functionality
btnNew.addEventListener('click', init);

const updateActivePlayerScore = function () {
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
};

const switchPlayer = function () {
  // Reset current score
  currentScore = 0;
  updateActivePlayerScore();
  // Switch to next player
  console.log(`Current active player: ${activePlayer}`);
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(`New active player: ${activePlayer}`);
  player1Element.classList.toggle('.player--active');
  player2Element.classList.toggle('.player--active');
};
