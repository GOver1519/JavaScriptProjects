//1st dice
document.querySelector("button").addEventListener("click", function(){
    var random1 = Math.random();
var a = Math.floor(random1 * 6)+1;

var dice1 = "dice" + a + ".png";
var imgs1 = "diceImages/" + dice1;

var player1 = document.querySelectorAll("img")[0];
player1.setAttribute("src", imgs1);


//2nd dice
var random2 = Math.random();
var b = Math.floor(random2 * 6)+1;

var dice2 = "dice" + b + ".png";
var imgs2 = "diceImages/" + dice2;

var player2 = document.querySelectorAll("img")[1];
player2.setAttribute("src", imgs2);


//3rd dice
var random3 = Math.random();
var c = Math.floor(random3 * 6)+1;

var dice3 = "dice" + c + ".png";
var imgs3 = "diceImages/" + dice3;

var player3 = document.querySelectorAll("img")[2];
player3.setAttribute("src", imgs3);

//4th dice
var random4 = Math.random();
var d = Math.floor(random4 * 6)+1;

var dice4 = "dice" + d + ".png";
var imgs4 = "diceImages/" + dice4;

var player4 = document.querySelectorAll("img")[3];
player4.setAttribute("src", imgs4);

//5th dice
var random5 = Math.random();
var e = Math.floor(random5 * 6)+1;

var dice5 = "dice" + e + ".png";
var imgs5 = "diceImages/" + dice5;

var player4 = document.querySelectorAll("img")[4];
player4.setAttribute("src", imgs5);

//6th player
var random6 = Math.random();
var f = Math.floor(random6 * 6)+1;

var dice6 = "dice" + f + ".png";
var imgs6 = "diceImages/" + dice6;

var player6 = document.querySelectorAll("img")[5];
player6.setAttribute("src", imgs6);


const array = [a, b, c, d, e]
const maximum = Math.max(...array);
let result = [];
for(i = 0; i<6; i++){
    if(array[i] == maximum){
        result.push(i);
    }
}

document.querySelector("h4").innerHTML = "Winners are: " + result;




})
