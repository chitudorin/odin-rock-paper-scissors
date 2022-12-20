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

function game() {
  playerScore = 0;
  computerScore = 0;
  for (i = 1; i <= 5; i++) {
    playerSelection = prompt("Type your selection (rock/paper/scissors):");
    round = playRound(playerSelection, getComputerChoice());
    console.log(round);
    if (round.charAt(4) === "w") {
      playerScore++;
    } else if (round.charAt(4) === "l") {
      computerScore++;
    }
    console.log(`The score is ${playerScore}-${computerScore}!`);
  }
  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game is a draw!");
  }
}

const buttons = document.querySelectorAll("button");
const outcome = document.querySelector("div.outcome");
const score = document.querySelector("div.score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    outcome.textContent = playRound(button.innerHTML, getComputerChoice());
    if (outcome.textContent.charAt(4) === "w") {
      playerScore++;
    } else if (outcome.textContent.charAt(4) === "l") {
      computerScore++;
    }
    score.textContent = `The score is ${playerScore}-${computerScore}!`;
    if (playerScore === 5 || computerScore === 5) {
      if (playerScore > computerScore) {
        outcome.textContent = "You won the game!";
      } else {
        outcome.textContent = "You lost the game!";
      }
      computerScore = 0;
      playerScore = 0;
    }
  });
});
