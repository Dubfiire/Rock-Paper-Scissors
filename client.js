const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementsByClassName("playerscore");  
const aiDisplay = document.getElementsByClassName("aiscore");
const resultDisplay = document.getElementsByClassName("finalresult");
let playerscore = 0;
let aiscore = 0; 

function playGame(playerChoice){

    const aiChoice = choices [Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === aiChoice){
        result = "Its a tie";
    } else {
        switch(playerChoice){
            case "Rock":
                result = (aiChoice === "Scissors") ? "You win" : "You Lose" ;
                break;
            case "Paper":
                result = (aiChoice === "Rock") ? "You win" : "You Lose" ;
                break;
            case "Scissors":
                    result = (aiChoice === "Paper") ? "You win" : "You Lose" ;
                    break;
        }
    }
    playerDisplay.textContent = `Your score: ${playerChoice}`;
    aiDisplay.textContent = `Ai score: ${ playerChoice }`;
    resultDisplay.textContent = result;
}