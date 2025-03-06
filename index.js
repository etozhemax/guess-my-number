const MIN_VALUE = 1;
const MAX_VALUE = 20;

let viewModel = {
  againButton: null,
  checkButton: null,
  inputValue: null,
  guessedValue: null,
  labelScore: null,
  labelHighScore: null,
  body: null,
};

const gameState = {
  score: 20,
  highscore: 0,
  guessedValue: 0,
};

function resetFrontendState() {
  viewModel.guessedValue.textContent = '?';
  viewModel.inputValue.value = '';
  viewModel.checkButton.style = '';
  viewModel.body.style = 'background-color: #222;';

  viewModel.labelScore.textContent = gameState.score;
  viewModel.labelHighScore.textContent = gameState.highscore;
}

function parseContext() {
  viewModel.againButton = document.querySelector('.js-again');
  viewModel.checkButton = document.querySelector('.js-check');
  viewModel.inputValue = document.querySelector('.js-guess');
  viewModel.guessedValue = document.querySelector('.js-number');
  viewModel.labelScore = document.querySelector('.js-score');
  viewModel.labelHighScore = document.querySelector('.js-highscore');
  viewModel.body = document.querySelector('body');
}

function bindEvents() {
  viewModel.againButton.addEventListener('click', () => {
    gameState.score = 20;
    guessNumber();

    resetFrontendState();
  });

  viewModel.checkButton.addEventListener('click', () => {
    viewModel.guessedValue.textContent = viewModel.inputValue.value;
    console.log(gameState);

    if (+viewModel.inputValue.value === gameState.guessedValue) {
      if (gameState.score > gameState.highscore) {
        gameState.highscore = gameState.score;
      }

      viewModel.checkButton.style = 'display: none;';
      viewModel.body.style = 'background-color: green;';
    } else {
      gameState.score--;
    }

    viewModel.labelScore.textContent = gameState.score;
    viewModel.labelHighScore.textContent = gameState.highscore;

    if (gameState.score === 0) {
      viewModel.checkButton.style = 'display: none;';
      viewModel.body.style = 'background-color: red;';
    }
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
