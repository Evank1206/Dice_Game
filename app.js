// variable for 2 players 0/1 ; // variable holds main score ; // variable for temprery score
let activePlayer, roundScore, currentScore
// new game called here // even can write newGame function here // but this time i just called here
newGame();
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
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if active player = "0" playerOne, switch to playerTwo, else switch to player one
        document.getElementById("current-" + activePlayer).textContent = currentScore;  // erase the current score
        document.getElementById("active-0").classList.toggle("active");
        document.getElementById("active-1").classList.toggle("active");
    }
});
// holding the current score and adding them
document.querySelector(".hold").addEventListener("click", function () {
    // checking the score which reached 100
    if (roundScore[activePlayer] >= 100) {//alert("CONGRATES! PlAYER TWO WINNER!");
        activePlayer === 0 ? document.querySelector(".player-0")
            .innerHTML = "<h3>WINNER!</h3>" : document.querySelector(".player-1")
                .innerHTML = "<h3>WINNER!</h3>";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".buttons").style.display = "none";

    } else {
        // activePlayer === 0 ? switchPlayer() : switchPlayer(); //called the switcing players function here in curtain conditional 
        switchPlayer()
    }
});
// this the function for switching between two players
function switchPlayer() {
    // add the current score to round score
    roundScore[activePlayer] = roundScore[activePlayer] + currentScore;
    document.querySelector(".savedScore-" + activePlayer).textContent = roundScore[activePlayer];
    // erase the current score
    currentScore = 0;
    // if active player dice equal to random number-"0" switch to player two, else switch to player one
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // erased current score from DOM
    document.getElementById("current-" + activePlayer).textContent = currentScore;

    // THE SMALL DOT switch player two
    document.getElementById("active-0").classList.toggle("active");
    document.getElementById("active-1").classList.toggle("active");
    //  erase the dice from DOM
    document.querySelector(".dice").style.display = "none";
}
// new game starts event listener
document.querySelector(".newGame").addEventListener("click", newGame);
// newGame function
function newGame() {
    activePlayer = 0; // player one "0" // player two "1"
    roundScore = [0, 0]; // both players savedScore starts from 0
    currentScore = 0; // bith players cuurentScore starts from 0
    // both players score stars from 0 "DOM"-ing section
    document.querySelector(".savedScore-0").textContent = currentScore;
    document.querySelector(".savedScore-1").textContent = currentScore;
    document.querySelector(".current-0").textContent = currentScore;
    document.querySelector(".current-1").textContent = currentScore;
    document.querySelector(".dice").style.display = "none"; // hiding the dice
    document.querySelector(".buttons").style.display = "block"; // when new game start roll&hold buttons display
    document.querySelector(".player-0").textContent = "PLAYER 1"; // when new game starts, WINNER changes to regular player
    document.querySelector(".player-1").textContent = "PLAYER 2";
    // active player's DOT class removed from HTML/DOM
    document.getElementById("active-0").classList.remove("active");
    document.getElementById("active-1").classList.remove("active");
    // player 0/player one is the head to start game // "active" class added to player 0's tag
    document.getElementById("active-0").classList.add("active");

}