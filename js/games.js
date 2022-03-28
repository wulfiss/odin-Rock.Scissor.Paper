function computerPlay(){
    arrRockScissorPaper = ["Rock", "Scissors", "Paper", "Rock", "Scissors", "Paper"];
    randomPCSelector = Math.floor(Math.random() * 6);
    return arrRockScissorPaper[randomPCSelector];
}

console.log(computerPlay())