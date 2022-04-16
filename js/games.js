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
    
    return result;
}

function finalScore (pcScoreF, userScoreF){

    
    if(userScoreF == 5){
        finalMessage = `You win! your score is ${userScoreF} and PC score is ${pcScoreF}`;
        userGame.hidden = true;
        afterGame.hidden = false;
        reMatch();
        userScoreF = 0;
    }else if(pcScoreF == 5){
        finalMessage = `You lose! your score is ${userScoreF} and PC score is ${pcScoreF}`;
        userGame.hidden = true;
        afterGame.hidden = false;
        reMatch();
        pcScoreF = 0;
    }else{
        finalMessage = `Your points are ${userScoreF} and PC points are ${pcScoreF}`;
    }
    return finalMessage;
}

function reMatch(){
    const $rematchNo = document.querySelector('#rematchButtonNo');
    const $rematchYes = document.querySelector('#rematchButtonYes');

    $rematchYes.addEventListener('click', () => {
        /*userGame.hidden = false;
        afterGame.hidden = true;
        finalResult.textContent = '';
        matchResult.textContent = '';

        game();
        */
       location.reload();
    });
}


function userInputButtons(){
    const $rock = document.querySelector('#rock');
    const $paper = document.querySelector('#paper');
    const $scissors = document.querySelector('#scissors');


    $rock.addEventListener('click', () => {
        matchResult.textContent = playRound("rock", computerPlay());
        finalResult.textContent = finalScore(pcScore, userScore);
    });

    $paper.addEventListener('click', () => {
        matchResult.textContent = playRound("paper", computerPlay());
        finalResult.textContent = finalScore(pcScore, userScore);
    });

    $scissors.addEventListener('click', () => {
        matchResult.textContent = playRound("scissors", computerPlay());
        finalResult.textContent = finalScore(pcScore, userScore);
    });

}

function game(){
    userInputButtons();
}

let pcScore = 0;
let userScore = 0;
let finalResult = document.querySelector('#finalResult');
let matchResult = document.querySelector('#matchResult');
let finalMessage = '';
let userGame = document.querySelector('#userGame');
let afterGame = document.querySelector('#afterGame');

game();