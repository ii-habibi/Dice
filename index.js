// Dice player 1

var randomNumber = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomNumber);

// Dice Player 3

var randomNumber2 = "images/dice" + (Math.floor(Math.random() * 6) + 1) + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomNumber2);

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}

// Reload 

function reload() {
    location.reload();
}