var randomNumber1, randomNumber2;
randomNumber1 = Math.ceil(Math.random() * 6);
randomNumber2 = Math.ceil(Math.random() * 6);

var imgString1 = "images/dice" + randomNumber1 + ".png";
var imgString2 = "images/dice" + randomNumber2 + ".png";

document.querySelector("img.img1").setAttribute("src", imgString1);
document.querySelector("img.img2").setAttribute("src", imgString2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
