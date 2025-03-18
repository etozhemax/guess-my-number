const MIN_VALUE = 1;
const MAX_VALUE = 20;

let viewModel = {
  againButton: null,
  checkButton: null,
  infoMessage: null,
  inputValue: null,
  guessedValue: null,
  labelScore: null,
  labelHighScore: null,
  body: null,
};

const model = {
  gameState: {
    score: 20,
    highscore: 0,
    guessedValue: 0,
  },
  guessNumber() {
    this.gameState.guessedValue = Math.floor(
      Math.random() * MAX_VALUE + MIN_VALUE
    );
  },
  parseContext(viewModel) {
    viewModel.againButton = document.querySelector('.js-again');
    viewModel.checkButton = document.querySelector('.js-check');
    viewModel.inputValue = document.querySelector('.js-guess');
    viewModel.infoMessage = document.querySelector('.js-message');
    viewModel.guessedValue = document.querySelector('.js-number');
    viewModel.labelScore = document.querySelector('.js-score');
    viewModel.labelHighScore = document.querySelector('.js-highscore');
    viewModel.body = document.querySelector('body');
  },
  bindEvents(viewModel) {
    viewModel.againButton.addEventListener('click', () => {
      model.gameState.score = 20;
      model.guessNumber();

      this.resetFrontendState(viewModel);
    });

    viewModel.checkButton.addEventListener('click', () => {
      viewModel.guessedValue.textContent = viewModel.inputValue.value;

      if (+viewModel.inputValue.value === model.gameState.guessedValue) {
        if (model.gameState.score > model.gameState.highscore) {
          model.gameState.highscore = model.gameState.score;
        }

        viewModel.checkButton.style = 'display: none;';
        viewModel.body.style = 'background-color: green;';

        viewModel.infoMessage.textContent = 'You won!';
      } else {
        model.gameState.score--;
      }

      viewModel.labelScore.textContent = model.gameState.score;
      viewModel.labelHighScore.textContent = model.gameState.highscore;

      if (model.gameState.score === 0) {
        viewModel.checkButton.style = 'display: none;';
        viewModel.body.style = 'background-color: red;';
        viewModel.infoMessage.textContent = 'You lose!';
      }
    });
  },
  resetFrontendState(viewModel) {
    viewModel.guessedValue.textContent = '?';
    viewModel.inputValue.value = '';
    viewModel.checkButton.style = '';
    viewModel.infoMessage.textContent = 'Start guessing...';
    viewModel.body.style = 'background-color: #222;';

    viewModel.labelScore.textContent = model.gameState.score;
    viewModel.labelHighScore.textContent = model.gameState.highscore;
  },
};

function initGame() {
  model.parseContext(viewModel);
  model.bindEvents(viewModel);

  model.guessNumber();
}

initGame();
