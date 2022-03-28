function computerPlay(){
    arrRockScissorPaper = ["rock", "scissors", "paper", "rock", "scissors", "paper"];
    randomPCSelector = Math.floor(Math.random() * 6);
    return arrRockScissorPaper[randomPCSelector];
}

function gamePlay(playerSelection, computerSelection){
    let result;
    if (playerSelection == computerSelection){
        result = "It's a tie.";
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        result = "You win.";
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        result = "You win.";
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        result = "You win.";
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        result = "You lose.";
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        result = "You lose.";
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        result = "You lose.";
    }

    return result;
}

let userInput = prompt("Enter Rock, Scissors or Paper","");
let userInputLowCase = userInput.toLowerCase();
let computerInput = computerPlay();

console.log(gamePlay(userInputLowCase, computerInput));
