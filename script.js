let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    function draw() {
      return `It's a draw!`;
    }
  
    function lose() {
      computerSelection =
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
      return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
  
    function win() {
      playerSelection =
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
      return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
  
    if (playerSelection === computerSelection) {
      return draw();
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return lose();
      } else {
        return win();
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        return lose();
      } else {
        return win();
      }
    } else {
      if (computerSelection === "rock") {
        return lose();
      } else {
        return win();
      }
    }
  }
  
  console.log(playRound(getComputerChoice(), getComputerChoice()));