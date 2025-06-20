let randomValue = Math.random();
console.log(randomValue);

let computerMove;

if (randomValue >= 0 && randomValue < 1/3){
    computerMove = 'ROCK';
}else if (randomValue >= 1 /3 && randomValue < 2 / 3) {
    computerMove = "PAPER";
}else {
    computerMove = "SCISSORS";
}

console.log(computerMove);