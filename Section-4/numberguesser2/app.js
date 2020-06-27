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
  winningNum = 2,
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

// LISTEN FOR GUESS
guessBtn.addEventListener('click', function () {
  let guess = Number(guessInput.value);

  // VALIDATE
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red');
  }

  // IF CHOSEN CORRECTLY
  if (guess === winningNum) {
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.border = '1px solid green';
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  }
});

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;

  setTimeout(function () {
    message.textContent = '';
  }, 3000);
}
