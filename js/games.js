function computerPlay(){
    arrRockScissorPaper = ["rock", "scissors", "paper","rock", "scissors", "paper","rock", "scissors", "paper","rock", "scissors", "paper",];
    //randomPCSelector = Math.floor(Math.random() * arrRockScissorPaper.length);
    randomPCSelector = rando(0 , arrRockScissorPaper.length - 1);
    return arrRockScissorPaper[randomPCSelector];
}

function playRound(playerSelection, computerSelection){
    let result = '';
    let user = 0;
    let pc = 0;
    changePcImg(computerSelection);

    if (playerSelection == computerSelection){
        
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        user++;
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        user++;
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        user++;
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        pc++;
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        pc++;
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        pc++;
    }
    return [user, pc];
}

function changePcImg(pcSelection){
    let blankPCVisor = document.querySelector('#blankSelection');
    let pcImage = document.querySelector('#pcImage');
    
    switch(pcSelection){
        case 'rock':
            blankPCVisor.style.display ='none';
            pcImage.style.display='flex';
            pcImage.src = './img/rock.png'
            break;
        case 'paper':
            blankPCVisor.style.display ='none';
            pcImage.style.display='flex';
            pcImage.src = './img/paper.png'
            break;
        default:
            blankPCVisor.style.display ='none';
            pcImage.style.display='flex';
            pcImage.src = './img/scissors.png'
            break;
    }
}

function finalScore (pcScoreF, userScoreF){
    if(userScoreF == 5){
        finalMessage = `You win! your score is ${userScoreF} and PC score is ${pcScoreF}`;
        reMatch();
        userScoreF = 0;
    }else if(pcScoreF == 5){
        finalMessage = `You lose! your score is ${userScoreF} and PC score is ${pcScoreF}`;
        reMatch();
        pcScoreF = 0;
    }else{
        //finalMessage = `Your points are ${userScoreF} and PC points are ${pcScoreF}`;
        userPoints.textContent = userScoreF;
        pcPoints.textContent = pcScoreF;
    }
    //return finalMessage;
}

function reMatch(){
    const $rematchYes = document.querySelector('#rematchButtonYes');
    $rematchYes.addEventListener('click', () => {
       location.reload();
    });
}


function userInputButtons(){
    const $rock = document.querySelector('#rock');
    const $paper = document.querySelector('#paper');
    const $scissors = document.querySelector('#scissors');
    let userPointsFunction = 0;
    let PCPointsFunction = 0;

    $rock.addEventListener('click', () => {
        let playRoundVar = playRound("rock", computerPlay());
        userPointsFunction += playRoundVar[0];
        PCPointsFunction += playRoundVar[1];
        userPoints.textContent = userPointsFunction;
        pcPoints.textContent = PCPointsFunction;
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


let userPoints = document.querySelector('#userPoints');
let pcPoints = document.querySelector('#PCpoints');
let userGame = document.querySelector('#gamePlay');
let afterGame = document.querySelector('#afterGame');



game();