var randNumber1 = Math.floor(Math.random()*6 + 1);



var randomDiceImage = "dice" + randNumber1 +".png";


var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];



image1.setAttribute("src", randomImageSource);


var randNumber2 = Math.floor(Math.random()*6 + 1);

var randomDiceImage2 = "dice" + randNumber2 +".png";

var randomDiceImage2 = "dice" + randNumber2 +".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randNumber1 > randNumber2){
    document.querySelector("h1").innerHTML = ("Player 1 wins")
}else if (randNumber2 > randNumber1){
    document.querySelector("h1").innerHTML = ("Player 2 wins")
}else{
    document.querySelector("h1").innerHTML = ("Draw")
}

