var leftCanvas = document.getElementById('leftCanvas');
var ctx4 = leftCanvas.getContext('2d');
  window.onload = function(){
    
// // var word = prompt("enter word", "word");
// // if (ScrabbleWordList.indexOf(word) > -1) {
// //   console.log("found");
// // } else {
// //   console.log("not found");
// // }
var audio = new Audio('./music/correctword.wav');
var audio2 = new Audio('./music/wrongword.wav')

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


var word = [];
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

 function score(pt) {
  this.ctx4.clearRect(29,220,250,50);
  this.ctx4.fillStyle = 'white';
  this.ctx4.font = '30px Helvetica';
  this.ctx4.fillText('Score: '+ pt ,30, 250);
  
}
function drawWordCount(wc){
  this.ctx4.clearRect(29,70,250,50);
  this.ctx4.fillStyle = 'white';
  this.ctx4.font = '30px Helvetica';
  this.ctx4.fillText('Word Count: '+ wc ,30, 100);
}
function drawNot(wc){
  this.ctx4.clearRect(29,140,250,50);
  this.ctx4.fillStyle = 'white';
  this.ctx4.font = '30px Helvetica';
  this.ctx4.fillText('Wrong words: '+ wc ,30, 170);
}
function drawTime(time){
  this.ctx4.clearRect(29,290,300,50);
  this.ctx4.fillStyle = 'white';
  this.ctx4.font = '30px Helvetica';
  this.ctx4.fillText('Time left: '+ time ,30, 320);
}

var board = {
  timer:60,
  wordCount: 0,
  notWord: 0,
  score: 0
}


function gameOverPoints(total) {
  setTimeout(function() {
    if(total <= 50 ){
    alert('You did not get enough points, you lose!');
    }else{
      alert('YAY!! YOU WIN!!! You got 50 or more points!')
    }
  }, 10);
  location.reload(true);
}

 function addedFallingX(letter){
    letter.height = 40;
    letter.width = 40;
    letter.x = randX();
  }
 
function getSum(word) {
   var total = 0;
    for(var i = 0; i < word.length; i++){
        total += word[i].points;
    }
  return total;
}
  function addedLetterY(letter,pos){
    letter.y = pos;
  }

  
// array to store the keys of my letters
 var fallingLnames = [];
 // start game 
function startGame(){
  document.getElementById("start-button").disabled = true;
  score(0);
  drawTime(board.timer);
  drawWordCount(board.wordCount);
  drawNot(board.notWord);
  board.timer--;
  var countdown = setInterval(function(){
    drawTime(board.timer);
    board.timer--
    if (board.timer === 0) {
      drawTime(board.timer);
      gameOverPoints(board.score)
      clearInterval(countdown);
    }
  }, 1000);
   function gameOverNotaWord() {
    setTimeout(function() {
      alert('That was not a word, you lose! ');
    }, 10);
    location.reload(true);
  }

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
for(var i=0; i < 20000; i++){
    currentGame.addLetterSide();
}

// add letters to falling
for(var z=0; z < 500; z++){
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
// for(var v = 0; v < currentGame.myLetters.length; v++){
// currentGame.myLetters[v].drawLetter(ctx);
// }



// clone my fixed letters to be pushed into fallingLetters
cloned = clone(fixedLetters);
// join fixedLetters to fallingLetters
currentGame.fallingLetters = joinArrays(cloned,currentGame.fallingLetters);

// shuffle the falling letters array
currentGame.fallingLetters = scrambleAllLetters(currentGame.fallingLetters);
for(var m = 0; m < currentGame.fallingLetters.length; m++){
  currentGame.fallingLetters[m].height = 40;
  currentGame.fallingLetters[m].width = 40;
  currentGame.fallingLetters[m].x = randX();
}
// draw the falling letters
currentGame.drawFallingLetters(currentGame.fallingLetters)

// keypress events
var bx = 0;
var total = 0;
//*************************************** */
document.onkeydown = function(event){
  //console.log(event.keyCode);
  if(event.keyCode >= 65 && event.keyCode <= 90){
  var key = String.fromCharCode(event.keyCode);
      key = key.toLowerCase();
  var resultFalling = currentGame.fallingLetters.filter(letter => letter.name === key && letter.y <= 500 && letter.y >0)
  
  if(resultFalling.length > 0){
  var resultSide = currentGame.myLetters.filter(letter => letter.name === resultFalling[0].name)
  var sideLetter = currentGame.myLetters.indexOf(resultSide[0]);
  }

  var theCorrectLetter = currentGame.fallingLetters.indexOf(resultFalling[0]);
  var letterToClear = currentGame.fallingLetters[theCorrectLetter];

  var sideLetterToClear = currentGame.myLetters[sideLetter];
 
  
  // if(sideLetterToClear){
    
    //resultSide.splice(0,1);
    //resultFalling.splice(0,1)
    //currentGame.myLetters.splice(sideLetterToClear,1);
  // }

  var tmpY;
    if(letterToClear && sideLetterToClear){
    while(letterToClear.y < 500){
      letterToClear.clearLetter(ctx2);
      letterToClear.y+=52;
  }
    sideLetterToClear.clearLetter(ctx);
    tmpY = currentGame.myLetters[sideLetter].y;
    bottomletter = new Letter();
    Object.assign(bottomletter,currentGame.myLetters[sideLetter])
   currentGame.fallingLetters.splice(theCorrectLetter,1);
   currentGame.myLetters.splice(sideLetter,1)
   //console.log(bottomletter) 
   bottomletter.x = bx;
   bottomletter.y = 0;
   bottomletter.drawLetter(ctx3)
   word.push(bottomletter);
   bx += 50;
}

   
  
   //console.log("falling",currentGame.fallingLetters)
    //console.log(currentGame.fallingLetters)
    //console.log(currentGame.fallingLetters[-1])
    //currentGame.addLetterFalling();
    currentGame.addLetterSide();
    //console.log(currentGame.myLetters);
    //addedFallingX(currentGame.fallingLetters[25]);
    addedLetterY(currentGame.myLetters[9],tmpY)
    //currentGame.myLetters[9].drawLetter(ctx);
   

    // var haventFallen = currentGame.fallingLetters.filter(letter => letter.y < 50);
    // currentGame.fallingLetters = haventFallen;
    // if(currentGame.fallingLetters.length % 20 === 0){
    //   //console.log("%20")
    // currentGame.drawFallingLetters(currentGame.fallingLetters);
    // }
}  

if(event.keyCode === 13 && word.length > 0){
  myWord = '';
  //console.log(word);
  for(var i = 0; i < word.length; i++){
          myWord += word[i].name;
  }
      if (ScrabbleWordList.indexOf(myWord) > -1) {
        total += getSum(word);
        board.score = total;
        score(total);
        board.wordCount++;
        drawWordCount(board.wordCount);
        audio.play();
        //console.log(total);
       
           
}     else {
        board.notWord++;
        drawNot(board.notWord);
        audio2.play();
        if(board.notWord === 2){
        gameOverNotaWord();
        }
        
  }
  
  for(var i = 0; i < word.length; i++){
    word[i].clearLetter(ctx3);
            
}
bx = 0;
word =[];
}



  }
  
//console.log(currentGame.fallingLetters)

}//end of start game

document.getElementById("start-button").onclick = function (){
  startGame();
};






 };  