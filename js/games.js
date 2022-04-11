function computerPlay(){
    arrRockScissorPaper = ["rock", "scissors", "paper", "rock", "scissors", "paper"];
    randomPCSelector = Math.floor((Math.random() * Math.random()) * arrRockScissorPaper.length);
    return arrRockScissorPaper[randomPCSelector];
}

function playRound(playerSelection, computerSelection){
    let result;

    if (playerSelection == computerSelection){
        result = "It's a tie.";
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        result = "You win! Rock beats Scissors.";
        userScore++;
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        result = "You win! Scissors beats Paper.";
        userScore++;
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        result = "You win! Paper beats Rock.";
        userScore++;
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        result = "You lose! Rock beats Scissors.";
        pcScore++;
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        result = "You lose! Scissors beats Paper.";
        pcScore++;
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        result = "You lose! Paper beats Rock.";
        pcScore++;
    }

    return result;
}
function finalScore (pcScoreF, userScoreF){
    let finalMessage;
    if(userScoreF > pcScoreF){
        return finalMessage = `You won! your score is ${userScoreF} and PC score is ${pcScoreF}`;
    }else if(userScoreF < pcScoreF){
        return finalMessage = `You lost! your score is ${userScoreF} and PC score is ${pcScoreF}`;
    }else if(userScoreF = pcScoreF){
        return finalMessage = `You tied with the PC! your score is ${userScoreF} and PC score is ${pcScoreF}`;
    }

}

function reMatch(){
    let userInputRematch = prompt("Do want a rematch? (Yes or No)","");
    let userInputRematchLow = userInputRematch;
    if (userInputRematchLow == "yes"){
        pcScore = 0;
        userScore = 0;
        console.clear();
        game();
    } else if(userInputRematchLow == "no"){
        console.clear();
        console.log("Sayounara");
    } else{
        console.log("That's not a YES or NO, try again");
        reMatch();
    }
}
/*
function userInputFunc(){
    let userInputF = prompt("Enter Rock, Scissors or Paper","");
    if (userInputF == null){
        return false;
    }
    let userInputLow = userInputF.toLowerCase();

    if (userInputLow == "rock" || userInputLow == "scissors" || userInputLow == "paper"){
        return userInputLow;
    }else{
        console.log(`You have typed ${userInputF} and that is not and option, try again.`);
        return userInputFunc();
    }
}
*/
function userInputButtons(){
    const $rock = document.querySelector('#rock');
    const $paper = document.querySelector('#paper');
    const $scissors = document.querySelector('#scissors');
    

    $rock.addEventListener('click', () => {
        game("rock", computerPlay());
    });

    $paper.addEventListener('click', () => {
        game("paper", computerPlay());
    });

    $scissors.addEventListener('click', () => {
        game("scissors", computerPlay());
    });

}
let userInputButton = "";
let pcScore = 0;
let userScore = 0;

function game(userInput, computerInput){
       //for (let i = 0; i < 5; i++){ 
        //let userInput = userInputButton;    
        //let computerInput = computerPlay();
        console.log(playRound(userInput, computerInput));
      //}
      console.log(finalScore(pcScore, userScore));
      //reMatch();
}

userInputButtons();