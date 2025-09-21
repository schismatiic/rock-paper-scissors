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

  let humanScore = 0;
  let computerScore = 0;
  let round = 0;
  const playRound = (humanChoice, computerChoice) => {
    if (round === 5) {
      const finish = document.createElement("h4");
      if (humanScore > computerScore) {
        finish.textContent = `Game finished! Human wins!`;
        currentGame.style.cssText =
          "border: 1px solid white; width: 250px; margin: 20px 0; padding: 10px; border-radius: 20px; background-color: white; color: rgb(48, 48, 48); font-weight: 700";
        currentGame.innerHTML = `${finish.textContent}`;
        playAgain.appendChild(playButton);
        playButton.addEventListener("click", playGame);
        return;
      } else if (humanScore < computerScore) {
        finish.textContent = `Game finished! Computer wins. So, Allied Mastercomputer won!`;
        currentGame.style.cssText =
          "border: 1px solid white; width: 250px; margin: 20px 0; padding: 10px; border-radius: 20px; background-color: white; color: rgb(48, 48, 48); font-weight: 700";
        currentGame.innerHTML = `${finish.textContent}`;
        return;
      } else {
        finish.textContent = `Game finished! Draw!`;
        currentGame.style.cssText =
          "border: 1px solid white; width: 250px; margin: 20px 0; padding: 10px; border-radius: 20px; background-color: white; color: rgb(48, 48, 48); font-weight: 700";
        currentGame.innerHTML = `${finish.textContent}`;
        return;
      }
    }
    currentGame.style.cssText =
      "border: 1px solid white; width: 250px; margin: 20px 0; padding: 10px; border-radius: 20px";
    if (humanChoice === computerChoice) {
      const draw = document.createElement("h4");
      draw.textContent = `Draw!`;
      currentGame.innerHTML = `${draw.textContent}`;
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "scissors")
    ) {
      humanScore++;
      const win = document.createElement("h4");
      win.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      currentGame.innerHTML = `${win.textContent}`;
    } else {
      computerScore++;
      const lose = document.createElement("h4");
      lose.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      currentGame.innerHTML = `${lose.textContent}`;
    }
    const score = document.createElement("p");
    score.textContent = `${humanScore} -  ${computerScore}`;
    scoreScreen.style.display = "flex";
    scoreScreen.innerHTML = `<p> ${score.textContent} </p>`;
    round++;
  };
  buttonContainer.removeChild(playButton);
  const options = ["rock", "paper", "scissors"];
  for (let index = 0; index < 6; index++) {
    const btn = document.createElement("button");
    btn.style.cssText = "margin: 4px; width: 120px;";
    btn.textContent = options[index].toUpperCase();
    buttonRps.appendChild(btn);
    btn.addEventListener("click", () =>
      playRound(options[index], getComputerChoice())
    );
  }
};

const buttonContainer = document.querySelector(".box__buttons");
const buttonRps = document.querySelector(".rps__button");
const scoreScreen = document.querySelector(".score");
const currentGame = document.querySelector(".current__game");
const playButton = document.createElement("button");
const playAgain = document.createElement("div");
playButton.textContent = "PLAY";
playButton.style.cssText = "";
buttonContainer.appendChild(playButton);

playButton.addEventListener("click", playGame);
