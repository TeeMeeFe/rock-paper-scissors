console.log("Hello World!");

function getComputerChoice() {
    // Get a very simple, evenly distributed random between 0 and 100 as integers 
    let rand = Math.floor((Math.random() * 2) * 100);
    let str = rand < 33 ? "rock" : 
              rand >= 33 && rand < 66 ? "paper" : "scissors";

    return str;
}

/* for (let i = 0; i <= 1000; i++) {
    console.log(getComputerChoice());
} */