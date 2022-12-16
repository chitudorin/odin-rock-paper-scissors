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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log("forEach worked");
    console.log(playRound(button.innerHTML, getComputerChoice()));
  });
});
