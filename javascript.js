computerChoices = ['rock', 'paper', 'scissors']

playerScore = 0
computerScore = 0

function getComputerChoice(array) {
    const randomIndex = Math.floor(Math.random() * 3);
    return array[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ('It\'s a tie')
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore += 1;
        return (`You win! ${playerSelection} beats ${computerSelection}`)
    } else {
        computerScore += 1;
        return (`You lose! ${computerSelection} beats ${playerSelection}`)
    }
}

function playGame() {
    for (let i = 0; i < 4; i++) {
        const playerChoice = prompt("Choose 'Rock', 'Paper' or 'Scissors'").toLowerCase();
        const computerChoice = getComputerChoice(computerChoices);
        console.log(playRound(playerChoice, computerChoice));
        console.log(`playerChoice = ${playerChoice}, computerChoice = ${computerChoice}`)
    }

    if (playerScore > computerScore) {
        alert(`Game Over. You won ${playerScore} - ${computerScore}`);
    } else {
        alert(`Game Over. You lose ${playerScore} - ${computerScore}`);
    }
}


playGame();
console.log(`playerScore = ${playerScore}, computerScore = ${computerScore}`)