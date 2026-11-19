console.log("Hello World!");

// Track scores
let humanScore = 0;
let computerScore = 0;

// Random computer choice
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

// Play one round
function playRound(humanChoice, computerChoice) {
    // Don't allow more rounds after someone reaches 5
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    humanChoice = humanChoice.toLowerCase();

    // Display both choices
    choices.textContent =
        "You chose " + humanChoice +
        ". Computer chose " + computerChoice + ".";

    // Determine the round winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        results.textContent = "It's a tie!";

    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        results.textContent =
            "You win! " + humanChoice + " beats " + computerChoice;

    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        results.textContent =
            "You lose! " + computerChoice + " beats " + humanChoice;
    }

    // Update scoreboard
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Check for game over
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

        // Disable buttons
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;

        // Show restart button
        playAgain.hidden = false;
    }
}

// Find HTML elements
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const results = document.querySelector("#results");
const choices = document.querySelector("#choices");
const gameOver = document.querySelector("#game-over");

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const playAgain = document.querySelector("#play-again");

// Button event listeners
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

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