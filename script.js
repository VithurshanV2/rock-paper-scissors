let humanScore = 0;
let computerScore = 0;
let roundResult = '';

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function getHumanChoice() {
    let choice = prompt("Choose between rock, paper or scissors").toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResult = "Draw"
    }
    else if (humanChoice === 'rock' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        roundResult = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    console.log(roundResult);
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You won");
    } else if (computerScore > humanScore) {
        console.log("Defeat! You lost");
    } else {
        console.log("Tie! Well played");
    }
}

playGame();