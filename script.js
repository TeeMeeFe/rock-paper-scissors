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
    let choice = prompt("Please choose rock, paper or scissors").toLowerCase();

    switch(choice) {
        case undefined:
        case null:
            alert("You canceled the game.");
            return ;
        case "rock":
        case "paper":
        case "scissors":
            return choice
        default :
            alert("Invalid: you must type either 'rock', 'paper' or 'scissors'. Make sure to write them correctly!");
            return getPlayerChoice();
    }
}

// Lets create a round
function playRound(playerChoice, computerChoice) {
    if( playerChoice !== null || playerChoice !== undefined ) {
        roundWinner = (playerChoice === "rock" && computerChoice === "scissors") ? "Player" :
                        (playerChoice === "rock" && computerChoice === "paper") ? "Computer" :
                        (playerChoice === "paper" && computerChoice === "rock") ? "Player" :
                        (playerChoice === "paper" && computerChoice === "scissors") ? "Computer" :
                        (playerChoice === "scissors" && computerChoice === "paper") ? "Player" : 
                        (playerChoice === "scissors" && computerChoice === "rock") ? "Computer" : "Tie";

        switch(roundWinner) {
            case "Player":
                alert(`You won! ${playerChoice} beats ${computerChoice}.`)
                playerScore += 1;
                break;
            case "Computer":
                alert(`You lose! ${computerChoice} beats ${playerChoice}.`)
                computerScore += 1;
                break;
            case "Tie":
                alert(`You were on a tie. Must try again!`)
                break;
        }
        return roundWinner;
    }
    return ;
}

// Lets play a game 5 times
function playGame() {
    // Reset these variables once we enter the game 
    playerScore = 0;
    computerScore = 0;
    let i = 0;

    while(i < 5) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        // Escape early if the game was canceled
        if( playerChoice === null || playerChoice === undefined ) { return ; } 

        playRound(playerChoice, computerChoice);

        // Do increment the index if it was not a tie or something else
        if( roundWinner === "Player" || roundWinner === "Computer" ) { i++; }
    }
    
    let msg = playerScore > computerScore ? "You win! " : "You lose! ";
    document.getElementById("score").innerHTML = msg + `You scored ${playerScore} vs ${computerScore}.`;

    return ;
}

// Initialize the variables for computer, user scores and some other
let playerScore;
let computerScore;
let roundWinner;

const playButton = document.getElementById("button");

playButton.addEventListener("click", function() {
    document.getElementById("button").innerHTML = "Try again!";
    playGame();
});
