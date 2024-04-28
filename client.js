const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.querySelector(".playerDisplay");
const aiDisplay = document.querySelector(".aiDisplay");
const resultDisplay = document.querySelector(".finalresult");
const winnerDeclare = document.querySelector(".winnerdeclare h2");
let playerscore = 0;
let aiscore = 0;

function playGame(playerChoice) {
  if (!choices.includes(playerChoice)) {
    alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
    return;
  }

  const aiChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === aiChoice) {
    result = "It's a tie";
  } else {
    switch (playerChoice) {
      case "Rock":
        result = aiChoice === "Scissors" ? "You win" : "You lose";
        break;
      case "Paper":
        result = aiChoice === "Rock" ? "You win" : "You lose";
        break;
      case "Scissors":
        result = aiChoice === "Paper" ? "You win" : "You lose";
        break;
    }
  }

  if (result.startsWith("You win")) {
    playerscore++;
  } else if (result.startsWith("You lose")) {
    aiscore++;
  }
    
    
    
    
  if (playerscore === 5) {
      winnerDeclare.textContent = "You win the Game";
      playerscore = 0;
      aiscore = 0;
  } else if (aiscore === 5) {
      winnerDeclare.textContent = "Ai win the Game";
      playerscore = 0;
      aiscore = 0;
  }

  playerDisplay.textContent = `Your score: ${playerscore}`;
  aiDisplay.textContent = `AI score: ${aiscore}`;
  resultDisplay.textContent = result;
}