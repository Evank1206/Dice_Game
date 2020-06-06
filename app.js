// variable for 2 players 0/1
let activePlayer = 0;
// variable holds main score
let mainScore = [0, 0]
// variable for temprery score
let currentScore = 0;

document.querySelector(".scroll").addEventListener("click", function () {
    // console.log("hey clicked");
    // dice random numbers 1-6

    let dice = Math.floor(Math.random() * 6) + 1;
    // console.log(dice);
    // to dom current score player one
    document.querySelector(".currentH1").textContent = dice;

});

// document.querySelector(".scroll").addEventListener("click", function () {

//     let dice = Math.floor(Math.random() * 6) + 1;
//     // to dom current score player two
//     document.querySelector(".currentH2").textContent = dice;

// })


