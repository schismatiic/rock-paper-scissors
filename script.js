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
const getHumanChoice = () => {
  const option = prompt(
    "===== Rock paper scissors ===== \n Type your choice: "
  );
  return option;
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    if (humanChoice === computerChoice) {
      console.log("Draw!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  } else {
    alert(
      `[ERROR] ${humanChoice} is not valid for an entry! \n Try again with "rock", "paper" or "scissors"`
    );
  }
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
