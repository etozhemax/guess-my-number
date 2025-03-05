const MIN_VALUE = 1;
const MAX_VALUE = 20;

let againButton;
let checkButton;
let inputValue;
let guessedValue;
let labelScore;
let labelHighScore;

const gameState = {
  score: 20,
  highscore: 0,
  guessedValue: 0,
};

function resetFrontendState() {
  guessedValue.textContent = '?';
  inputValue.value = '';
  checkButton.style = '';

  labelScore.textContent = gameState.score;
  labelHighScore.textContent = gameState.highscore;
}

function parseContext() {
  againButton = document.querySelector('.js-again');
  checkButton = document.querySelector('.js-check');
  inputValue = document.querySelector('.js-guess');
  guessedValue = document.querySelector('.js-number');
  labelScore = document.querySelector('.js-score');
  labelHighScore = document.querySelector('.js-highscore');
}

function bindEvents() {
  againButton.addEventListener('click', () => {
    gameState.score = 20;
    guessNumber();

    resetFrontendState();
  });

  checkButton.addEventListener('click', () => {
    guessedValue.textContent = inputValue.value;
    console.log(gameState);

    if (+inputValue.value === gameState.guessedValue) {
      if (gameState.score > gameState.highscore) {
        gameState.highscore = gameState.score;
      }

      checkButton.style = 'display: none;';
    } else {
      gameState.score--;
    }

    labelScore.textContent = gameState.score;
    labelHighScore.textContent = gameState.highscore;
  });
}

function guessNumber() {
  gameState.guessedValue = Math.floor(Math.random() * MAX_VALUE + MIN_VALUE);
}

function initGame() {
  parseContext();
  bindEvents();

  guessNumber();
}

initGame();
