function numberGuessingGame() {
    const secretNumber = Math.floor(Math.random() * 10) + 1;

    let guess;
    let attempts = 0;

    console.log("Guess a number between 1 and 10");

    while (true) {
        guess = parseInt(prompt("Enter your guess (1-10):"));
        attempts++;

        if (guess === secretNumber) {
            console.log("Correct! You guessed in " + attempts + " attempts.");
            break;
        }
        else if (guess > secretNumber) {
            console.log("Too high! Try again.");
        }
        else if (guess < secretNumber) {
            console.log("Too low! Try again.");
        }
        else {
            console.log("Invalid input");
        }
    }
}

// call function
numberGuessingGame();