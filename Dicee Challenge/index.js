//Prompt to have players enter their names.
var playerOne = prompt("What is player one's name?");
var playerTwo = prompt("What is player two's name?");

//Create a random number generator from 1 to 6.
//Use floor to make whole number. * 6 + 1 to get values 1 to 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//Display dice image based on  randomNumber1
var randomDiceImage = "dice" + randomNumber1 + ".png";

//Create source file path from randomNumber1 and randomDiceImage
var randomImageSource = "images/" + randomDiceImage;

//Target any attribute with the img selector
var image1 = document.querySelectorAll("img")[0];

//Set new filepath based on the random number.
image1.setAttribute("src", randomImageSource);

//Same thing for player two.
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randonImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randonImageSource2);

// If Player one wins.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = playerOne + " Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = playerTwo + " Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
