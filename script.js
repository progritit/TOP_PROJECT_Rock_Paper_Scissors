const MAX_ROUNDS = 5;

const moves = ["rock", "paper", "scissors"];

// Stores the current match state so the UI can update after each round.
let score = {
    human: 0,
    computer: 0,
};

let currentRound = 1;
let gameOver = false;

// DOM references used throughout the game to keep JavaScript connected to the page.
const humanScoreElement = document.querySelector("#human-score");
const computerScoreElement = document.querySelector("#computer-score");
const roundNumberElement = document.querySelector("#round-number");
const gameMessageElement = document.querySelector("#game-message");
const humanChoiceDisplay = document.querySelector("#human-choice-display");
const computerChoiceDisplay = document.querySelector("#computer-choice-display");
const moveButtons = document.querySelectorAll(".move-button");
const resetButton = document.querySelector("#reset-button");
const copyrightYearElement = document.querySelector("#copyright-year");

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function isValidChoice(choice) {
    return moves.includes(choice);
}

// Keeps the win/loss rules in one place so they are easy to check or change later.
function getRoundWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "human";
    }

    return "computer";
}

// Plays one round and returns all the data the UI needs to display the result.
function playRound(humanChoice, currentScore) {
    const computerChoice = getComputerChoice();

    // Safety check: the UI only sends valid choices now, but this keeps the game logic reusable.
    if (!isValidChoice(humanChoice)) {
        return {
            isValid: false,
            message: "Invalid choice. Please choose rock, paper, or scissors.",
            score: currentScore,
        };
    }

    const winner = getRoundWinner(humanChoice, computerChoice);

    // Copy the score instead of changing the original object directly inside this function.
    const newScore = {
        human: currentScore.human,
        computer: currentScore.computer,
    };

    if (winner === "human") {
        newScore.human++;
    } else if (winner === "computer") {
        newScore.computer++;
    }

    return {
        isValid: true,
        humanChoice,
        computerChoice,
        winner,
        score: newScore,
        message: getRoundMessage(humanChoice, computerChoice, winner),
    };
}

function getRoundMessage(humanChoice, computerChoice, winner) {
    if (winner === "tie") {
        return `It's a tie! Both chose ${humanChoice}.`;
    }

if (winner === "human") {
    return `You win! ${humanChoice} beats ${computerChoice}.`;
}

return `You lose! ${computerChoice} beats ${humanChoice}.`;
}

// Decides the final match winner after all rounds are played.
function getGameWinner(score) {
    if (score.human > score.computer) {
        return "human";
    }

    if (score.computer > score.human) {
        return "computer";
    }

    return "tie";
}

function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Keeps all DOM updates in one function so the display stays consistent.
function updateDisplay(roundResult) {
    humanScoreElement.textContent = score.human;
    computerScoreElement.textContent = score.computer;
    roundNumberElement.textContent = currentRound;

    if (roundResult) {
        humanChoiceDisplay.textContent = capitalizeWord(roundResult.humanChoice);
        computerChoiceDisplay.textContent = capitalizeWord(roundResult.computerChoice);
        gameMessageElement.textContent = roundResult.message;
    } else {
        humanChoiceDisplay.textContent = "Empty";
        computerChoiceDisplay.textContent = "Empty";
        gameMessageElement.textContent = "Choose your move!";
    }
}

// Locks the game after the final round and shows the match result.
function finishGame() {
    const gameWinner = getGameWinner(score);

    gameOver = true;

    moveButtons.forEach((button) => {
        button.disabled = true;
    });

    gameMessageElement.classList.add("final-message");

    if (gameWinner === "human") {
        gameMessageElement.textContent = `Game over! You win ${score.human} to ${score.computer}!`;
    } else if (gameWinner === "computer") {
        gameMessageElement.textContent = `Game over! AI wins ${score.computer} to ${score.human}.`;
    } else {
        gameMessageElement.textContent = `Game over! It's a tie, ${score.human} to ${score.computer}.`;
    }
}

// Main click handler for the move buttons.
function handleMoveClick(event) {
    if (gameOver) {
        return;
    }

    // The selected move comes from the button's data-choice attribute in the HTML.
    const selectedMove = event.currentTarget.dataset.choice;
    const roundResult = playRound(selectedMove, score);

    if (!roundResult.isValid) {
        gameMessageElement.textContent = roundResult.message;
        return;
    }

    score = roundResult.score;
    updateDisplay(roundResult);

    if (currentRound >= MAX_ROUNDS) {
        finishGame();
    } else {
        currentRound++;
        roundNumberElement.textContent = currentRound;
    }
}

// Restores the original state without reloading the page.
function resetGame() {
    score = {
        human: 0,
        computer: 0,
    };

    currentRound = 1;
    gameOver = false;

    moveButtons.forEach((button) => {
        button.disabled = false;
    });

    gameMessageElement.classList.remove("final-message");

    updateDisplay();
}

// Keeps the copyright year current automatically.
function setCopyrightYear() {
    const currentYear = new Date().getFullYear();
    copyrightYearElement.textContent = currentYear;
}

// Attach event listeners after the DOM is loaded through the defer script tag.
moveButtons.forEach((button) => {
    button.addEventListener("click", handleMoveClick);
});

resetButton.addEventListener("click", resetGame);

setCopyrightYear();
updateDisplay();