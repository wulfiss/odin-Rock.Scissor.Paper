function computerPlay(){
    arrRockScissorPaper = ["rock", "scissors", "paper"];
    //randomPCSelector = Math.floor(Math.random() * arrRockScissorPaper.length);
    randomPCSelector = rando(0 , arrRockScissorPaper.length - 1);
    return arrRockScissorPaper[randomPCSelector];
}

function playRound(playerSelection, computerSelection){
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

function reMatch(){
    const $rematchYes = document.querySelector('#rematchButtonYes');
    afterGame.style.display = "flex"
    userGame.style.display = "none";
    matchResult.style.display = "none";

    $rematchYes.addEventListener('click', () => {
       location.reload();
    });
}

function finalMgs(user){
    let finalMessage = document.querySelector('.msgFinal');

    if(user == 5){
        finalMessage.textContent = 'USER WIN!';
    }else{
        finalMessage.textContent = 'PC WIN!'
    }
}

function userInputButtons(){
    const $rock = document.querySelector('#rock');
    const $paper = document.querySelector('#paper');
    const $scissors = document.querySelector('#scissors');
    let playRoundVar = [];
    let userPointsFunction = 0;
    let PCPointsFunction = 0;

    

    $rock.addEventListener('click', () => {
        playRoundVar = playRound("rock", computerPlay());
        userPointsFunction += playRoundVar[0];
        PCPointsFunction += playRoundVar[1];
        userPoints.textContent = userPointsFunction;
        pcPoints.textContent = PCPointsFunction;
        if( userPointsFunction == 5 || PCPointsFunction == 5){
            finalMgs(userPointsFunction);
            reMatch();
        }
    });

    $paper.addEventListener('click', () => {
        playRoundVar = playRound("paper", computerPlay());
        userPointsFunction += playRoundVar[0];
        PCPointsFunction += playRoundVar[1];
        userPoints.textContent = userPointsFunction;
        pcPoints.textContent = PCPointsFunction;

        if( userPointsFunction == 5 || PCPointsFunction == 5){
            finalMgs(userPointsFunction);
            reMatch();
        }

    });

    $scissors.addEventListener('click', () => {
        playRoundVar = playRound("scissors", computerPlay());
        userPointsFunction += playRoundVar[0];
        PCPointsFunction += playRoundVar[1];
        userPoints.textContent = userPointsFunction;
        pcPoints.textContent = PCPointsFunction;
        if( userPointsFunction == 5 || PCPointsFunction == 5){
            finalMgs(userPointsFunction);
            reMatch();
        }
    });
}

function game(){
    userInputButtons();
}


let userPoints = document.querySelector('#userPoints');
let pcPoints = document.querySelector('#PCpoints');
let userGame = document.querySelector('#gamePlay');
let afterGame = document.querySelector('#afterGame');
let matchResult = document.querySelector('#matchResult');



game();