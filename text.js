    // dice random numbers 1-6
    let diceNum = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").style.display = "block"; 
    // to dom current score player one
    // let diceImage = document.querySelector(".currentH1").textContent = diceNum ;
    document.querySelector(".dice").src ="./img/" + "img-" + diceImage + ".png";
    // accept random number "1" 
    document.querySelector(".savedScore").textContent = "0";
    
     currentScoreIncrement = currentScoreIncrement + diceNum;