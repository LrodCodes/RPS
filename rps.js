let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerChoice = ""
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0){
        return computerChoice = 'rock'
    } else if (choice == 1){
        return computerChoice = 'paper'
    } else{
        return computerChoice = 'scissors'
    }
}

function playRound(playerChoice, computerChoice){

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
    
    return ('You win! ' + playerSelection + ' beats ' + computerSelection)
    } else if (playerSelection == computerSelection) {
        return ('It\'s a tie. You both chose ' + playerSelection)
    } else {
    return ('You lose! ' + computerSelection + ' beats ' + playerSelection)
    }
}
