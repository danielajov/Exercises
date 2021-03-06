/* 
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GOLBAL score. After that,
     it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// class implementation


const gameWinningScore = 100;
let playerOneScore = 0;
let playerTwoScore = 0;
let currentScore = 0;
let activePlayer = 0;
let isGameOn = false;

let newGameButton = document.querySelector(".btn-new");
let roleButton = document.querySelector(".btn-roll");
let holdButton = document.querySelector(".btn-hold");

let playerOneCurrentScoreElement = document.getElementById("current-0");
let playerOneTotalScoreElement = document.getElementById("score-0");
let playerTwoCurrentScoreElement = document.getElementById("current-1");
let playerTwoTotalScoreElement = document.getElementById("score-1");

function newGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    activePlayer = 0;
    currentScore = 0;
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

    // 0.231 * 6 + 1 == 4.1231
    let diceOne = Math.floor(Math.random() * 6 + 1);
    let diceTwo = Math.floor(Math.random() * 6 + 1);

    // ./dice/dice-3.png
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
    }
}

function nextPlayer() {
    currentScore = 0;

    if (activePlayer === 0) {
        playerOneCurrentScoreElement.innerText = currentScore;
    } else {
        playerTwoCurrentScoreElement.innerText = currentScore;
    }

    // if (activePlayer === 0) {
    //     activePlayer = 1;
    // } else {
    //     activePlayer = 0;
    // }
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player-${activePlayer}-panel`).classList.add("active");
}

function holdCurrentScore() {
    if (!isGameOn) {
        return;
    }
    
    if (activePlayer === 0) {
        playerOneScore += currentScore;
        playerOneTotalScoreElement.innerText = playerOneScore;
        nextPlayer();
    } else {
        playerTwoScore += currentScore;
        playerTwoTotalScoreElement.innerText = playerTwoScore;
        nextPlayer();
    }
    checkForWinner();
}

function checkForWinner() {
    if (playerOneScore >= gameWinningScore) {
        isGameOn = false;
        alert("Player one is the winner");
    } else if (playerTwoScore >= gameWinningScore) {
        isGameOn = false;
        alert("Player two is the winner");
    }
}

newGameButton.addEventListener("click", newGame);

roleButton.addEventListener("click", function () {
    rollDice();
});

holdButton.addEventListener("click", function () {
    holdCurrentScore();
});