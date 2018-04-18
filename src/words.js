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

function joinArrays(fixed,falling){
  return fixed.concat(falling)
}

var rightCanvas = document.getElementById('rightCanvas');
var ctx = rightCanvas.getContext('2d');

function getPoints(name){
  for (var property in points) {
    if (points.hasOwnProperty(property)){
        if(name === property){
          return points[property]
        }
    }
}
}

Letter.prototype.drawLetter = function(canvas){
  var theImage = new Image();
  theImage.src = this.img;
      var that = this;
      theImage.onload = function(){
      canvas.drawImage(theImage, that.x, that.y, that.width, that.height);
    }
}
function fixedLetterPosition(letter, pos){
  if(letter.hasOwnProperty){
    letter.y = pos;
  }
 }

 function randX(){
   return Math.floor(Math.random() * 550)
 }

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

for(var i=0; i < 7; i++){
    currentGame.addLetterSide();
}

for(var z=0; z < 19; z++){
  currentGame.addLetterFalling();
}


var fixedLetters = currentGame.myLetters;
console.log(fixedLetters);
var count = 0;
for(var l = 0; l < fixedLetters.length; l++){
  fixedLetterPosition(fixedLetters[l], count);
  count+=50;
}

for(var v = 0; v < currentGame.myLetters.length; v++){
currentGame.myLetters[v].drawLetter(ctx);
}

var fallingL = currentGame.fallingLetters;
cloned = clone(fixedLetters);
fallingL = joinArrays(cloned,fallingL)
console.log(fallingL);
fallingL = scrambleAllLetters(fallingL);
for(var m = 0; m < fallingL.length; m++){
  fallingL[m].height = 40;
  fallingL[m].width = 40;
  fallingL[m].x = randX();
}

currentGame.drawFallingLetters(fallingL)
console.log(currentGame);
}//start game
document.getElementById("start-button").onclick = function (){
  startGame();
};

 };  