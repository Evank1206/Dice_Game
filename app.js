// variable for 2 players 0/1
let activePlayer = 0;
// variable holds main score
let mainScore = [0, 0]
// variable for temprery score
let currentScore = 0;

document.querySelector(".savedScore").textContent = "1";
document.querySelector(".dice").style.display = "none";
let currentScoreIncrement = 0;

document.querySelector(".scroll").addEventListener("click", function () {
    // console.log("hey clicked");
    // dice random numbers 1-6
    let diceNum = Math.floor(Math.random() * 6) + 1;
    // console.log(diceNum);
    currentScoreIncrement = currentScoreIncrement + diceNum;
    
    // to dom current score player one
    let diceImage = document.querySelector(".currentH1").textContent = currentScoreIncrement;
    document.querySelector(".savedScore").textContent = "0";
    // console.log(x);
    document.querySelector(".dice").src = "img-" + diceImage + ".png";
    document.querySelector(".dice").style.display = "block";
   
 
 

});

// document.querySelector(".scroll").addEventListener("click", function () {

//     let dice = Math.floor(Math.random() * 6) + 1;
//     // to dom current score player two
//     document.querySelector(".currentH2").textContent = dice;

// })


