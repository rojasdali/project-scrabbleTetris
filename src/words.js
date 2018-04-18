  window.onload = function(){

// // var word = prompt("enter word", "word");
// // if (ScrabbleWordList.indexOf(word) > -1) {
// //   console.log("found");
// // } else {
// //   console.log("not found");
// // }

var points = {
    'a': 1,
    'b': 3,
    'c': 3,
    'd': 2,
    'e': 1,
    'f': 4,
    'g': 2,
    'h': 4,
    'i': 1,
    'j': 8,
    'k': 5,
    'l': 1,
    'm': 3,
    'n': 1,
    'o': 1,
    'p': 3,
    'q': 10,
    'r': 1,
    's': 1,
    't': 1,
    'u': 1,
    'v': 4,
    'w': 4,
    'x': 8,
    'y': 4,
    'z': 10
}
// function to shuffle my falling letters array. this is needed because i am pushing in my fixed letters into it
function scrambleAllLetters(arr){
  var m = arr.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }

  return arr;

}
// concat fixedletters and fallingletters arrays so that the letters that are on the side of the screen are included in the letters falling
function joinArrays(fixed,falling){
  return fixed.concat(falling)
}

var rightCanvas = document.getElementById('rightCanvas');
var ctx = rightCanvas.getContext('2d');

// assign points to the letters
function getPoints(name){
  for (var property in points) {
    if (points.hasOwnProperty(property)){
        if(name === property){
          return points[property]
        }
    }
}
}

// assign a y position to letter
function fixedLetterPosition(letter, pos){
  if(letter.hasOwnProperty){
    letter.y = pos;
  }
 }
// assign random x to a letter
 function randX(){
   return Math.floor(Math.random() * 550)
 }
// clone my fixedLetters to be pushed into fallingLetters
 function clone(fixed){
    cloned = [];
    for(var i =0; i < fixed.length; i++){
      letter = new Letter();
      Object.assign(letter,fixed[i])
      cloned.push(letter)
    }
    for(var i = 0; i < cloned.length; i++){
      cloned[i].y = 0
    }
    return cloned
 }

 // start game 
function startGame(){
var currentGame = new Game()
for(var i=0; i < currentGame.abc.length; i++){
  letter = new Letter();
  letter.name = currentGame.abc[i];
  letter.img = 'images/'+currentGame.abc[i]+'.png'
  letter.x = 0;
  letter.y = 0;
  letter.height = 50;
  letter.width = 50;
  letter.keyCode = currentGame.abc[i].charCodeAt();
  letter.points = getPoints(letter.name);
  currentGame.addLetterAlpha(letter);
}

// add letters to the side
for(var i=0; i < 7; i++){
    currentGame.addLetterSide();
}

// add letters to falling
for(var z=0; z < 19; z++){
  currentGame.addLetterFalling();
}


var fixedLetters = currentGame.myLetters;
// start off with the side letters fixed to 50 y increments
var count = 0;
for(var l = 0; l < fixedLetters.length; l++){
  fixedLetterPosition(fixedLetters[l], count);
  count+=50;
}

// draw my fixed letters on the screen
for(var v = 0; v < currentGame.myLetters.length; v++){
currentGame.myLetters[v].drawLetter(ctx);
}

var fallingL = currentGame.fallingLetters;
// clone my fixed letters to be pushed into fallingLetters
cloned = clone(fixedLetters);
// join fixedLetters to fallingLetters
fallingL = joinArrays(cloned,fallingL)
// shuffle the falling letters array
fallingL = scrambleAllLetters(fallingL);
for(var m = 0; m < fallingL.length; m++){
  fallingL[m].height = 40;
  fallingL[m].width = 40;
  fallingL[m].x = randX();
}
// draw the falling letters
currentGame.drawFallingLetters(fallingL)

}//start game

document.getElementById("start-button").onclick = function (){
  startGame();
};




 };  