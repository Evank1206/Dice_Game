// variable for 2 players 0/1
let activePlayer = 0;
// variable holds main score
let roundScore = [0, 0]
// variable for temprery score
let currentScore = 0;

document.querySelector(".savedScore").textContent = "1";
document.querySelector(".dice").style.display = "none"; // hiding the dice
// let currentScoreIncrement = 0;

document.querySelector(".scroll").addEventListener("click", function () {
    let diceNumber = Math.floor(Math.random() * 6) + 1; // get random dice number 1-6
    console.log(diceNumber);
    document.querySelector(".dice").src = "./img/" + "img-" + diceNumber + ".png"; // displaying diceImage
    document.querySelector(".dice").style.display = "block"; // displaying dice
    // document.querySelector(".savedScore").textContent = "7"; // displayig game Score
    // condtional: accept number-"1", add random numbers and display the numbers in current score section
    if (diceNumber !== 1) {
        currentScore = currentScore + diceNumber;  // add random number to in currentScore
        document.getElementById("current-" + activePlayer).textContent = currentScore; // to DOM added currenScore
        holdFunction();
    } else { // if diceNumber === 1 is erase the current score to 0
        currentScore = 0;
        document.getElementById("current-" + activePlayer).innerHTML = currentScore;  // erase the current score
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if active player dice equal to random number-"0" switch to player two, else switch to player one
        document.getElementById("active-0").classList.toggle("active");
        document.getElementById("active-1").classList.toggle("active");
    }

});

document.querySelector(".hold").addEventListener("click", holdFunction);

function holdFunction() {
    currentScore.push(roundScore[0])

}





// document.querySelector(".scroll").addEventListener("click", function () {

//     let dice = Math.floor(Math.random() * 6) + 1;
//     // to dom current score player two
//     document.querySelector(".currentH2").textContent = dice;

// })


