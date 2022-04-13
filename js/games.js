function computerPlay(){
    arrRockScissorPaper = ["rock", "scissors", "paper"];
    randomPCSelector = Math.floor(Math.random() * arrRockScissorPaper.length);
    return arrRockScissorPaper[randomPCSelector];
}

function playRound(playerSelection, computerSelection){
    let result = '';

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
    //return result;
    return console.log(result);
}
function finalScore (pcScoreF, userScoreF){
    let finalMessage = '';
    if(userScoreF > pcScoreF){
        finalMessage = `You won! your score is ${userScoreF} and PC score is ${pcScoreF}`;
    }else if(userScoreF < pcScoreF){
        finalMessage = `You lost! your score is ${userScoreF} and PC score is ${pcScoreF}`;
    }else if(userScoreF == pcScoreF){
        finalMessage = `You tied with the PC! your score is ${userScoreF} and PC score is ${pcScoreF}`;
    }
    return finalMessage;
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


function userInputButtons(){
    const $rock = document.querySelector('#rock');
    const $paper = document.querySelector('#paper');
    const $scissors = document.querySelector('#scissors');
    let i = 0;
    
    $rock.addEventListener('click', () => {
        playRound("rock", computerPlay());
    });

    $paper.addEventListener('click', () => {
        playRound("paper", computerPlay());
    });

    $scissors.addEventListener('click', () => {
        playRound("scissors", computerPlay());
    });

}

let pcScore = 0;
let userScore = 0;


function game(){

    
    userInputButtons();
    let finalResult = document.querySelector('#finalResult');
    finalResult.textContent = finalScore(pcScore, userScore);
}

game();