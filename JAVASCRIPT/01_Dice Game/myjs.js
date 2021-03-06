const gameWinningScore = 100;
let playerOneScore = 0;
let playerTwoScore = 0;
let currentScore = 0;

let activePlayer = 0;
let isGameOn = false;

let newGameButton = document.querySelector(".btn-new");
let playerOneCurrentScoreElement = document.getElementById("current-0");
let playerOneTotalScoreElement = document.getElementById("score-0");
let playerTwoCurrentScoreElement = document.getElementById("current-1");
let playerTwoTotalScoreElement = document.getElementById("score-1");
let rollButton = document.querySelector(".btn-roll");

function newGame() {
    console.log("New game function");
    playerOneScore = 0;
    playerTwoScore = 0;
    currentScore = 0;
    activePlayer = 0;
    isGameOn = true;

    playerOneCurrentScoreElement.innerText = currentScore;
    playerOneTotalScoreElement.innerText = playerOneScore;
    playerTwoCurrentScoreElement.innerText = currentScore;
    playerTwoTotalScoreElement.innerText = playerTwoScore;
}

function rollDice() {
    if (!isGameOn) {
        return;
    }
    console.log("Roll dice");

    let diceOne = Math.floor(Math.random() * 6 + 1);
    let diceTwo = Math.floor(Math.random() * 6 + 1);
    document.querySelector(".dice").src = "./dice/dice-" + diceOne + ".png";
    document.querySelector(".dice2").src = `./dice/dice-${diceTwo}.png`;

    if (diceOne !== 1 && diceTwo !== 1) {

        currentScore += diceOne + diceTwo;
        if (activePlayer === 0) {
            playerOneCurrentScoreElement.innerText = currentScore;
        } else {
            playerTwoCurrentScoreElement.innerText = currentScore;
        }

    } else {
        nextPlayer();

        function nextPlayer (){
            currentScore = 0;

            if (activePlayer === 0) {
                playerOneCurrentScoreElement.innerText = currentScore;
            } else {
                playerTwoCurrentScoreElement.innerText = currentScore;
            }

            // if (activePlayer
            //      === 0) {
            //          activePlayer = 1;
            //      } else {
            //          activePlayer = 0;
            //      }
            console.log(`.player-${activePlayer}-panel`);
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
            activePlayer = activePlayer === 0 ? 1 : 0;
            console.log(`.player-${activePlayer}-panel`);
            document.querySelector(`.player-${activePlayer}-panel`).classList.add("active");
        }
    }
    
}

newGameButton.addEventListener("click", newGame);

rollButton.addEventListener("click", function () {
    rollDice();
});