
console.log("Hello World!");

// Keep track of scores
let humanScore = 0;
let computerScore = 0;

// Randomly choose rock, paper, or scissors
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Capitalize the first letter of a choice
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Play one round
function playRound(humanChoice, computerChoice) {

    // Stop the game once someone reaches 5 points
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    humanChoice = humanChoice.toLowerCase();

    let message = "";

    // Show both players' choices in smaller text
    choices.textContent =
        "You chose " + humanChoice +
        ". Computer chose " + computerChoice + ".";

    // Determine the winner
    if (humanChoice === computerChoice) {

        message = "Both chose " + humanChoice + ". It's a tie!";

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {

        humanScore++;

        message = capitalize(humanChoice) + " beats " +
            computerChoice + ". You win!";

    } else {

        computerScore++;

        message = capitalize(computerChoice) + " beats " +
            humanChoice + ". You lose!";
    }

    // Display the bold result
    results.textContent = message;

    // Update the scoreboard
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Check if the game is over
    if (humanScore >= 5 || computerScore >= 5) {

        if (humanScore >= 5) {
            gameOver.textContent =
                "You won the game! Final score: " +
                humanScore + " - " + computerScore;
        } else {
            gameOver.textContent =
                "Computer won the game! Final score: " +
                humanScore + " - " + computerScore;
        }

        // Disable choice buttons
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        // Show Play Again button
        playAgain.hidden = false;
    }
}

// Select HTML elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");
const choices = document.querySelector("#choices");
const gameOver = document.querySelector("#game-over");

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const playAgain = document.querySelector("#play-again");

// Rock button
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

// Paper button
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

// Scissors button
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

// Restart the game
playAgain.addEventListener("click", () => {

    humanScore = 0;
    computerScore = 0;

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    results.textContent = "";
    choices.textContent = "";
    gameOver.textContent = "";

    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;

    playAgain.hidden = true;
});

// Display initial scores
humanScoreDisplay.textContent = humanScore;
computerScoreDisplay.textContent = computerScore;
