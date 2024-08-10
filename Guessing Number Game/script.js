const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10; 


function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsSpan = document.getElementById('attempts');

    const guess = parseInt(guessInput.value);

    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    
    attempts--;
    attemptsSpan.textContent = attempts;

    
    if (guess === targetNumber) {
        message.textContent = `Congratulations! You guessed the number ${targetNumber} correctly!`;
        disableInput();
    } else if (guess < targetNumber) {
        message.textContent = 'Too low. Try again!';
    } else {
        message.textContent = 'Too high. Try again!';
    }

    
    if (attempts === 0) {
        message.textContent = `Game over! The number was ${targetNumber}.`;
        disableInput();
    }

    
    guessInput.value = '';
    guessInput.focus();
}


function disableInput() {
    const guessInput = document.getElementById('guessInput');
    const guessButton = document.querySelector('button');

    guessInput.disabled = true;
    guessButton.disabled = true;
}
