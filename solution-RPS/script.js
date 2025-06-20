let myScore = Number(localStorage.getItem("myScore")) || 0;
let computerScore = Number(localStorage.getItem("computerScore")) || 0;

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");
const resetButton = document.getElementById("reset-button");
const showScore = document.getElementById("show-score");

rockButton.addEventListener("click", () => {
    playGame("ROCK");
});

paperButton.addEventListener("click", () => {
    playGame("PAPER");
});

scissorsButton.addEventListener("click", () => {
    playGame("SCISSORS");
});

resetButton.addEventListener("click", () => {
    resetScore();
});

showScore.addEventListener("click", () => {
    console.log(`Your Score: ${myScore}, Computer Score: ${computerScore}`);
});

function playGame(myMove) {
    let randomValue = Math.random();
    console.log(`Random value: ${randomValue}`);

    let computerMove;

    if(randomValue >= 0 && randomValue < 1 /3) {
        computerMove = "ROCK";
    } else if (randomValue >= 1/ 3 && randomValue < 2 / 3) {
        computerMove = "PAPER";
    } else {
        computerMove = "SCISSORS";
    }

    console.log(`You: ${myMove} | Computer: ${computerMove}`);
    checkWinner(myMove, computerMove);
}

function checkWinner(player, computer) {
    if(player === computer) {
        console.log("TIE");
    } else if (
        (player === "ROCK" && computer === "SCISSORS") || 
        (player === "PAPER" && computer === "ROCK") ||
        (player === "SCISSORS" && computer === "PAPER")
    ) {
        console.log("YOUR ARE THE WINNER");
        myScore++;
    } else {
        console.log("COMPUTER WINS THE GAME");
        computerScore++;
    }

    localStorage.setItem("myScore",myScore);
    localStorage.setItem("computerScore", computerScore);
}

function resetScore() {
    myScore = 0;
    computerScore = 0;
    localStorage.setItem("myScore",0);
    localStorage.setItem("computerScore",0);
    console.log("Reset the  score");
}