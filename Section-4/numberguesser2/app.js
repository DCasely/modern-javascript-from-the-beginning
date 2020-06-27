/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify the player of the correct answer if they lose
- Let player choose to play again
*/

// GAME VALUES
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI ELEMENTS
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessInput = document.querySelector('#guess-input'),
  guessBtn = document.querySelector('#guess-btn'),
  message = document.querySelector('.message');

// ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

// PLAY AGIN EVENT LISTENER
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    // Reloads the Page
    window.location.reload();
  }
});

// LISTEN FOR GUESS
guessBtn.addEventListener('click', function () {
  let guess = Number(guessInput.value);

  // VALIDATE
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  // IF CHOSEN CORRECTLY
  if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  }

  // IF CHOSEN INCORRECTLY
  if (guess !== winningNum) {
    guessesLeft--;

    if (guessesLeft === 0) {
      // Game over - Lost!
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}.`
      );
    } else {
      // Game continues - answer wrong
      guessInput.style.border = '1px solid red';

      guessInput.value = '';

      // Tell user how many guesses are left.
      setMessage(
        `You chose "${guess}", not correct. You have ${guessesLeft} guesses left.`,
        'red'
      );
    }
  }
});

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable input
  guessInput.disabled = true;
  // Change border and text color
  guessInput.style.borderColor = color;
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
  guessBtn.style.borderColor = 'green';
}

// GET WINNING NUMBER
function getRandomNum(min, max) {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}

// SET MESSAGE
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;

  //   setTimeout(function () {
  //     message.textContent = '';
  //   }, 3000);
}
