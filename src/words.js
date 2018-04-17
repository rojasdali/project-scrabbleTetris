var Game = function(){
  this.letter = {}
  this.startGame;
  
}




window.onload = function(){
// var currentGame;

// var word = prompt("enter word", "word");
// if (ScrabbleWordList.indexOf(word) > -1) {
//   console.log("found");
// } else {
//   console.log("not found");
// }

// letters with the same ratio as a scrabble board, that way it can randomly select 7 letters to use at the same ratio
var letters = ['e','e','e','e','e','e','e','e','e','e','e','e','a','a','a','a','a','a','a','a','a','o','o','o','o','o','o','o','o',
'n','n','n','n','n','n','r','r','r','r','r','r','t','t','t','t','t','t','l','l','l','l','s','s','s','s','u','u','u','u',
'd','d','d','d','g','g','g','b','b','c','c','m','m','p','p','f','f','h','h','v','v','w','y','y','k','j','x','q','z'];

// alphabet to randomly select letters that havent already been chosen in the above 7 letters  
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

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

function getSevenLetters(arr){
  myLetters = [];
  var sevenTimes = 7;
  while(sevenTimes){
  var randInt = Math.floor(Math.random() * arr.length)
  myLetters.push(arr[randInt])
  sevenTimes--;
  }
  return myLetters;
}

function getOtherLetters(arr,mySevenLetters){
  myAlphabet = [];
  var tenTimes = 10;
  while(tenTimes){
    var randInt = Math.floor(Math.random() * arr.length)
    if (arr[randInt].indexOf(mySevenLetters) === -1){
      myAlphabet.push(arr[randInt]);
      tenTimes--;
    }
    
  }
  return myAlphabet;
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

function joinArrays(){
  return mySevenLetters.concat(myOtherLetters)
}

var mySevenLetters = getSevenLetters(letters);
var myOtherLetters = getOtherLetters(alphabet);
var myTotalLetters = joinArrays();
var myScrambledLetters = scrambleAllLetters(myTotalLetters);



var Letter = function(){
  this.x = 0;     
  this.y = 0;     
  this.width = 50;  
  this.height = 50;
  this.img = ''
}

var myCanvas = document.getElementById('rightCanvas');
var ctx = myCanvas.getContext('2d');
document.getElementById("start-button").onclick = function (){
  startGame();
};



  Letter.prototype.drawLetter = function(){
  var theImage = new Image();
  theImage.src = this.img;
  
    // console.log("currentGame.letter.img: ", currentGame.letter.img);
    // console.log("the image is: ", theImage)

      var that = this;

    theImage.onload = function(){
      console.log("this is onload function");
      ctx.drawImage(theImage, that.x, that.y, that.width, that.height);
      console.log("this.y  up is in onload image: ",that.y);
    }
  
}
Game.prototype.getTheLetter = function(){
  for(i = 0; i < mySevenLetters.length; i++){
    // console.log("y  down is:", currentGame.letter.y);

    // setTimeout(function(){
      // console.log("inside timeout: ", currentGame.letter.y)
      this.letter.img = 'images/'+mySevenLetters[i]+'.png';
      //currentGame.letter.x += 50;
      this.letter.y += 50;
    // })
    
    this.letter.drawLetter();
    console.log("im after draw letter call")
    // console.log(currentGame.letter.img);
  }
}


function startGame(){
  var currentGame = new Game();
  var theLetter = new Letter();
  currentGame.letter = theLetter;
  currentGame.getTheLetter();
  
  
}




};  

