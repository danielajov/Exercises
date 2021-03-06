/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GOLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



// Initializein global game varibles;
// Which we will be using to play the game;
// This will be our in game memory;
const gameWinningScore = 100; // In order to win the game one player has to get a score of 100 or more we set this value as constant because it cant be change thru code;
let playerOneScore = 0; // Here we will keep player one score;
let playerTwoScore = 0; // Here we will keep player two score;
let isGameOn = false; // To see if game is still runing if true game is runing if false game is over and we have a winner;
let activePlayer = 0; // To see which turn it is. Players will be marked as PlayerOne = 0, PlayerTwo = 1;
let currentScore = 0; // To see current round score so we can add this later to the total score of each player;

// Getting elements from the DOM so we can call them as varialbles for easy readbility;
let newGameButton = document.querySelector(".btn-new"); // Get new game button so we can use it later;
let roleButton = document.querySelector(".btn-roll"); // Get role button in order to roll the dice;
let holdButton = document.querySelector(".btn-hold"); // Get hold button in order to hold the current score;
let playerOneCurrentScoreElement = document.getElementById("current-0"); // Get the element that will hold the current score of player one;
let playerTwoCurrentScoreElement = document.getElementById("current-1"); // Get the element that will hold the current score of player two;
let playerOneTotalScoreElement = document.getElementById("score-0"); // Get the element that will hold current player total score in this case player One;
let playerTwoTotalScoreElement = document.getElementById("score-1"); // Get the element that will hold current player total score in this case player Two;

// Declaring a function that will start a new game;
// In this function we reasign the values to the initial state of our aplication/game;
// As you can notice we didnt use let in front of the variable because we DONT declare them here we just REASIGN new values;
function newGame() {
    // Reasigning the variables to initial state so the game starts from scratch;
    playerOneScore = 0;
    playerTwoScore = 0;
    isGameOn = true; // We set isGameOn to true for the game to be active;
    activePlayer = 0;
    currentScore = 0;
    // Showing initial state on screen;
    playerOneCurrentScoreElement.innerText = currentScore; // We set this to currentScore becouse currentScore is always zero at start;
    playerTwoCurrentScoreElement.innerText = currentScore; // We set this to currentScore becouse currentScore is always zero at start;
    playerOneTotalScoreElement.innerText = playerOneScore; // We set this to player score becouse player score is always zero at start;
    playerTwoTotalScoreElement.innerText = playerTwoScore; // We set this to player score becouse player score is always zero at start;
}

// Declaring a function that will role dice and check if the player has rolled 1;
// In this function we roll the dice and show that on screen;
// Next we do a check if the player has rolled 1 on either of the dices and if he did we skip his turn and give it to the next player;
function roleDice() {
    // Here we check if the game is not finished;
    // If the game is finished the role dice function will be disabled;
    if(!isGameOn){
        return;
    }

    let diceOne = Math.floor(Math.random() * 6 + 1); // Here we role dice one and get the value that will be between 1 and 6;
    let diceTwo = Math.floor(Math.random() * 6 + 1); // Here we role dice two and get the value that will be between 1 and 6;

    // We concat the string to point to the picture that is contained in the dice folder in our app and pass that as imgage source;
    // Exapmple in the first line below we will get
    // "./" this will represent the current folder that our script is or PigGame folder;
    // "./dice/" is our dice folder that we will be using to show pictures as you can notice is contained in the PigGame folder;
    // "./dice/dice-(here we add the dice number that we get from the dice rolled)" and then we add the extension ex ".png" which is our file format that we are using;
    // and in the end we get "./dice/dice-4.png" this will show our dice 4 picture;  
    document.querySelector(".dice").src = './dice/dice-' + diceOne + '.png'; // Here we show dice one picture on screen;
    document.querySelector(".dice2").src = './dice/dice-' + diceTwo + '.png'; // Here we show dice two picture on screen;

    // Now we need to check if the player has rolled 1 on either dice one or dice two
    if (diceOne !== 1 && diceTwo !== 1) {
        currentScore += diceOne + diceTwo; // Now we add to the current score the sum of the dices;
        // Next we need to check which player is the active player;
        // We use 0 for player one and 1 for player 2;
        if (activePlayer === 0) {
            playerOneCurrentScoreElement.innerText = currentScore; // Here we show the current score of the current active player;
        } else {
            playerTwoCurrentScoreElement.innerText = currentScore; // Here we show the current score of the current active player;
        }
    } else {
        // If player rolles one in either one of the dices we skip active player turn to the other player;
        nextPlayer(); // Here we call the function that will change active player;
    }
}

// Declaring a function that will change which player is next;
// In this function we change witch player is next to roll;
// First we set the current score to 0;
// Next we change the current score  that will be showed on screen;
// Finaly we change current active player and add indicator to screen whitch player is active;
function nextPlayer() {
    currentScore = 0; // We set the current score to zero always when a player change turn;

    // Here we check witch player is the active player and set the current score that is showed on the screen to 0;
    if(activePlayer === 0){
        playerOneCurrentScoreElement.innerText = currentScore; // In this statement we set player one current score board to 0;
    } else {
        playerTwoCurrentScoreElement.innerText = currentScore; // In this statement we set player two current score board to 0;
    }
    // Here we change players turn and show it on screen;
    // Important is the time of the execution of our code
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active"); // Here we remove the indicator from current active player;
    activePlayer = activePlayer === 0 ? 1 : 0; // This is the fancy way of doing if/else statment so we change the current active player;
    document.querySelector(`.player-${activePlayer}-panel`).classList.add("active"); // Here we add the indicator from current active player;
}

// Declaring a function that will hold the current score in total score and pass the turn to the next player;
// In this function we hold the current score and add it to the total score of the current active player;
// First we check if some player has won the game;
// We check witch player is the current active player;
// Then we add the score to the total score of the current active player;
// And change the turn to the next player;
// Finaly we check if we have a winner for the current game;
function holdCurrentScore(){
    // First we need to check if the game has winner;
    // If we have winner we will disable the execution of the code below;
    if(!isGameOn){
        return;
    }
    // Now again we need to check withch player is active and add the score to his total score;
    if(activePlayer === 0){
        playerOneScore += currentScore; // Adding the total score to current active player total score;
        playerOneTotalScoreElement.innerText = playerOneScore; // Changing the total score that will be shown on the screen for the current active player;
        nextPlayer(); // Now we pass the turn to the next player;
    } else {
        playerTwoScore += currentScore; // Adding the total score to current active player total score;
        playerTwoTotalScoreElement.innerText = playerTwoScore; // Changing the total score that will be shown on the screen for the current active player;
        nextPlayer(); // Now we pass the turn to the next player;
    }
    // Again we need to check if we have a winner :);
    checkForWinner();
}

// We always need to check for a winner so we declare a function that will do that for us every roll or hold;
// In this function we check if either player has a score that if larger or equal to the gameWinningScore;
// And we will show witch player has won the game and disable the game untill we press the new game button;
function checkForWinner(){
    // Here we check if the score of the players has reached the gameWinningScore;
    // If the gameWinningScore is reached we set the isGameOn to false and here we finish the game showing whitch player has won the game;
    if(playerOneScore >= gameWinningScore){
        isGameOn = false; // Setting the isGameOn to false so we can disable the players ti continue clicking the roll dice or hold buttons
        alert("Player 1 is the Winner"); // Showing witch player has won;
        //document.getElementById("winner").innerText = "Player 1 is the Winner";
    }
    if(playerTwoScore >= gameWinningScore){
        isGameOn = false; // Setting the isGameOn to false so we can disable the players ti continue clicking the roll dice or hold buttons
        alert("Player 2 is the Winner"); // Showing witch player has won;
        //document.getElementById("winner").innerText = "Player 2 is the Winner";
    }
}

// ================================== GAMEPLAY ======================================


// Here we will place all the event that will handle the gameplay;

// We add event listener to the new game button so we can start the game;
// When the user clicks on new game button the game will initialize and all the values will be set to the initial state;
// What that means that all the global variables will be reset to initial values;
newGameButton.addEventListener("click", function () {
    newGame(); // Cuz we are lazy to write same code over and over we made a function that we will use it everywhere where we want to start a new game; 
});

// We add event listener to the roll dice button so we can roll the dice;
// We call the roleDice funcion every time player clicks on role button;
roleButton.addEventListener("click", () => { // this is the new and the fancy way of making anonymous function;
    roleDice(); // Every time a player clicks the roll dice button this function will be called and execute the code that is declared in the function;
});

// We add event listener to the hold button so the player can hold his current score
holdButton.addEventListener("click", function () {
    holdCurrentScore(); // Every time a player clicks the hold dice button this function will be called and execute the code that is declared in the function;
});

// Now we have complited our first JS game;
// Have fun playing it :);