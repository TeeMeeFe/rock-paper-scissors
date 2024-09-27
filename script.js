// A function that randomly returns string values: "rock", "paper", "scissors"
function getComputerChoice() {
    // Get a very simple, evenly distributed random between 0 and 100 as integers 
    let rand = Math.floor(Math.random() * 100);
    let str = rand < 33 ? "rock" : 
              rand >= 33 && rand < 66 ? "paper" : "scissors";

    return str;
}

// A funtion that prompts the user to enter rock, paper or scissors
function getPlayerChoice() {
    let choice = prompt("Please choose rock, paper or scissors");
    //if( choice === "rock" ) {
    //    alert("Invalid: you must type either 'rock', 'paper' or 'scissors'. Make sure to write them correctly!");
    //}
   
    return choice.toLowerCase();
}

// Lets create a round
function playRound(playerChoice, computerChoice) {
    let roundWinner = (playerChoice === "rock" && computerChoice === "scissors") ? "Player" :
                      (playerChoice === "rock" && computerChoice === "paper") ? "Computer" :
                      (playerChoice === "paper" && computerChoice === "rock") ? "Player" :
                      (playerChoice === "paper" && computerChoice === "scissors") ? "Computer" :
                      (playerChoice === "scissors" && computerChoice === "paper") ? "Player" : 
                      (playerChoice === "scissors" && computerChoice === "rock") ? "Computer" : "Tie";

    switch(roundWinner) {
        case "Player":
            alert(`You won! ${playerChoice} beats ${computerChoice}.`)
            break;
        case "Computer":
            alert(`You lose! ${computerChoice} beats ${playerScore}.`)
            break;
        case "Tie":
            alert(`You were on a tie. Must try again!`)
            break;
    }

    return roundWinner;
}

// Initialize the variables for computer and user scores
let playerScore = 0;
let computerScore = 0;

const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);

