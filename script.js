const MAX_ROUNDS = 5;

const moves = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function isValidChoice(choice) {
    return moves.includes(choice);
}

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

function playRound(humanChoice, currentScore) {
    const computerChoice = getComputerChoice();

    if (!isValidChoice(humanChoice)) {
        return {
            isValid: false,
            message: "Invalid choice. Please choose rock, paper, or scissors.",
            score: currentScore,
        };
    }

    const winner = getRoundWinner(humanChoice, computerChoice);

    let newScore = {
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

function getGameWinner(score) {
    if (score.human > score.computer) {
        return "human";
    }

    if (score.computer > score.human) {
        return "computer";
    }

    return "tie";
}