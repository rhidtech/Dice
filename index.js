var randomNumber1 = Math.floor(Math.random() * 6) + 1; //prints whole number between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //creates a string to choose from dice imgs

var randomImageSource = "images/" + randomDiceImage;

 var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //prints whole number between 1-6

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

//var randomImageSource2 = "images/" + randomNumber2|+ "png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//updating h1 text depending on winner
if (randomNumber1 > randomNumber2) {
 document.querySelector("h1").innerHTML = "🏅 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
document.querySelector("h1").innerHTML = "Player 2 wins! 🏅";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
