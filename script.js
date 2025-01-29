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
    else if (computerChoice === 'rock' && humanChoice === 'paper' || computerChoice === 'paper' && humanChoice === 'scissors' || computerChoice === 'scissors' && humanChoice === 'rock') {
        humanScore++;
        roundResult = `You win! ${humanChoice} beats ${computerChoice}`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(roundResult);