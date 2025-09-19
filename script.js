const getComputerChoice = () => {
  const option = Math.random();
  if (option < 0.33) {
    return "Rock";
  } else if (option >= 0.33 && option < 0.66) {
    return "Paper";
  } else if (option >= 0.66 && option < 0.99) {
    return "Scissors";
  }
};
const getHumanChoice = () => {
  const option = prompt(
    "===== Rock paper scissors ===== \n Type your choice: "
  );
  return option;
};
console.log(getHumanChoice());
