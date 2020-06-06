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
    let x = document.querySelector(".currentH1").textContent = dice;
    console.log(x);
 document.querySelector(".dice").src = "one"+x+".png"
    switch (true) {
        case x === 1: one; break;
        case x === 2: two; break;
        case x === 3: three; break;
        case x === 4: four; break;
        case x === 5: five; break;
        case x === 6: six; break;
    }


});

// document.querySelector(".scroll").addEventListener("click", function () {

//     let dice = Math.floor(Math.random() * 6) + 1;
//     // to dom current score player two
//     document.querySelector(".currentH2").textContent = dice;

// })


