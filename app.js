// variable for 2 players 0/1
let activePlayer = 0;
// variable holds main score
let roundScore = [0, 0]
// variable for temprery score
let currentScore = 0;
// player 0 is the head to start game
document.querySelector(".savedScore-" + activePlayer).textContent = currentScore;
document.querySelector(".dice").style.display = "none"; // hiding the dice
// dice Rolling function
document.querySelector(".scroll").addEventListener("click", function () {
    let diceNumber = Math.floor(Math.random() * 6) + 1; // get random dice number 1-6
    // console.log(diceNumber);
    document.querySelector(".dice").style.display = "block"; // displaying dice
    document.querySelector(".dice").src = "./img/" + "img-" + diceNumber + ".png"; // displaying diceImage

    // condtional: accept number-"1", add random numbers and display the numbers in current score section
    if (diceNumber !== 1) {
        currentScore = currentScore + diceNumber;  // add random number to in currentScore
        document.getElementById("current-" + activePlayer).textContent = currentScore; // to DOM added currenScore
    } else { // if diceNumber === 1 is erase the current score to 0
        currentScore = 0;
        document.getElementById("current-" + activePlayer).textContent = currentScore;  // erase the current score
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if active player = "0" playerOne, switch to playerTwo, else switch to player one
        document.getElementById("active-0").classList.toggle("active");
        document.getElementById("active-1").classList.toggle("active");
    }
});

document.querySelector(".hold").addEventListener("click", function () {
   activePlayer === 0 ? switchPlayer() : switchPlayer();

});

function switchPlayer() {
    // add the current score to round score
    roundScore[activePlayer] = roundScore[activePlayer] + currentScore;
    document.querySelector(".savedScore-" + activePlayer).textContent = roundScore[activePlayer];

    // erase the current score
    currentScore = 0;
    document.getElementById("current-" + activePlayer).textContent = currentScore; // erased current score from DOM
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if active player dice equal to random number-"0" switch to player two, else switch to player one
    // THE SMALL DOT switch player two
    document.getElementById("active-0").classList.toggle("active");
    document.getElementById("active-1").classList.toggle("active");
    //  erase the dice from DOM
    document.querySelector(".dice").style.display = "none";

}

