// A function to toggle the rock, paper and scissor buttons as well as the play button1
function toggleElementDisplay() {
    let visible = false;

    if( visible === false ) {
        playButton.style.visibility = "hidden";
        gameDiv.style.visibility = "visible"; 
        visible = true;
    } else {
        playButton.style.visibility = "visible";
        gameDiv.style.visibility = "hidden";
        visible = false;
    }
}

// A function that randomly returns string values: "rock", "paper", "scissors"
function getComputerChoice() {
    // Get a very simple, evenly distributed random between 0 and 100 as integers 
    let rand = Math.floor(Math.random() * 100);
    let str = rand < 33 ? "rock" : 
              rand >= 33 && rand < 66 ? "paper" : "scissors";

    return str;
}

// A funtion that simply returns whatever button the player clicked
function getPlayerChoice() {
    switch(buttonString) {
        case "rockButton":
            return "rock";
        case "paperButton":
            return "paper";
        case "scissorsButton":
            return "scissors";
        default :
            return ;
    }
}

// Lets create a round
function playRound(playerChoice, computerChoice) {
    if( playerChoice === null || playerChoice === undefined ) { return ; }

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

// Lets play a game 5 times
function playGame() {
    // Keep track of the players' scores
    playerScore = 0;
    computerScore = 0;

    while( Math.max(playerScore, computerScore) < 5 ) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();

        playRound(playerChoice, computerChoice);

        // Escape early if the game was nullified
        if( playerChoice === null || playerChoice === undefined ) { return ; } 
    }

    let msg = playerScore > computerScore ? "You won the game! " : "You lost the game! ";
    document.querySelector("#score").textContent = msg + `You scored ${playerScore} vs ${computerScore}.`;

    return ;
}
/*function playGame() {
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
}*/

// Initialize the variables for computer, user scores and some other
let playerScore;
let computerScore;
let roundWinner;
let buttonString;

// Add a div menu and a button to the HTML body
const menuButtons = document.body.appendChild(document.createElement("div"));
      menuButtons.setAttribute("class", "menu-container")
const playButton = menuButtons.appendChild(document.createElement("button"));
      playButton.setAttribute("class", "playButton");
      playButton.textContent = "Play!";

// The other div that contains the rest of the buttons
const gameDiv = menuButtons.appendChild(document.createElement("div"));
      gameDiv.setAttribute("class", "gameDiv");
const rockButton = gameDiv.appendChild(document.createElement("button"));
      rockButton.setAttribute("class", "rockButton");
      rockButton.textContent = "Rock";
const paperButton = gameDiv.appendChild(document.createElement("button"));
      paperButton.setAttribute("class", "paperButton");
      paperButton.textContent = "Paper";
const scissorsButton = gameDiv.appendChild(document.createElement("button"));
      scissorsButton.setAttribute("class", "scissorsButton");
      scissorsButton.textContent = "Scissors";

// Now we listen for any clicks inside the menu div box
menuButtons.addEventListener("click", (event) => {

    let button = event.target;
    buttonString = button.classList.value;

    if( buttonString == "playButton" ) {
        playButton.textContent = "Try again!";
        // Switch visibility of the game buttons
        toggleElementDisplay();
    }
    else if( buttonString == "rockButton" || 
             buttonString == "paperButton" || 
             buttonString == "scissorsButton" ) { playGame() }
});
