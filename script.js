const playGame = () => {
  const getComputerChoice = () => {
    const option = Math.random();
    if (option < 0.33) {
      return "rock";
    } else if (option >= 0.33 && option < 0.66) {
      return "paper";
    } else if (option >= 0.66 && option < 0.99) {
      return "scissors";
    }
  };
  const getHumanChoice = (r) => {
    if (r === 0) {
      alert("You will play 5 rounds");
    }
    let option = "";
    while (option === "") {
      option = prompt(
        `===== Rock paper scissors ===== \n Round: ${
          r + 1
        } \n Type your choice: `
      );
      option = option.toLowerCase();
      if (option === "rock" || option === "paper" || option === "scissors") {
        return option;
      }
      alert("Try again with a valid option, stupid");
      option = "";
    }
    return option;
  };

  let humanScore = 0;
  let computerScore = 0;
  let round = 0;
  //   const humanSelection = getHumanChoice();
  //   const computerSelection = getComputerChoice();
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      alert(`${humanScore} - ${computerScore} \n Draw!`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      alert(
        `${humanScore} - ${computerScore} \n You win! ${humanChoice} beats ${computerChoice}`
      );
    } else {
      computerScore++;
      alert(
        `${humanScore} - ${computerScore} \n You lose! ${computerChoice} beats ${humanChoice}`
      );
    }
    round++;
  };
  buttonContainer.removeChild(playButton);

  const options = ["rock", "paper", "scissors"];
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    buttonContainer.appendChild(btn);
    btn.setAttribute("id", option);
  });
  playRound(getHumanChoice(round), getComputerChoice());

  // ====================== Score ======================
  const score = document.createElement("p");
  score.textContent = `${humanScore} -  ${computerScore}`;
  buttonContainer.appendChild(score);
  // =========================================================

  if (humanScore > computerScore) {
    alert(`Human wins! ${humanScore} - ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert(
      `Computer wins. So, Allied Mastercomputer won! ${humanScore} - ${computerScore}`
    );
  } else {
    alert(`Draw! ${humanScore} - ${computerScore}`);
  }
};
// ====================== Play button ======================
const buttonContainer = document.querySelector(".box__buttons");
const playButton = document.createElement("button");
playButton.textContent = "PLAY";
playButton.style.cssText = "";
buttonContainer.appendChild(playButton);
// =========================================================
playButton.addEventListener("click", playGame);
