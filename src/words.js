  window.onload = function(){

// // var word = prompt("enter word", "word");
// // if (ScrabbleWordList.indexOf(word) > -1) {
// //   console.log("found");
// // } else {
// //   console.log("not found");
// // }

// // letters with the same ratio as a scrabble board, that way it can randomly select 7 letters to use at the same ratio
// var letters = ['e','e','e','e','e','e','e','e','e','e','e','e','a','a','a','a','a','a','a','a','a','o','o','o','o','o','o','o','o',
// 'n','n','n','n','n','n','r','r','r','r','r','r','t','t','t','t','t','t','l','l','l','l','s','s','s','s','u','u','u','u',
// 'd','d','d','d','g','g','g','b','b','c','c','m','m','p','p','f','f','h','h','v','v','w','y','y','k','j','x','q','z'];

// // alphabet to randomly select letters that havent already been chosen in the above 7 letters  
// var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

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

// function getSevenLetters(arr){
//   myLetters = [];
//   var sevenTimes = 7;
//   while(sevenTimes){
//   var randInt = Math.floor(Math.random() * arr.length)
//   myLetters.push(arr[randInt])
//   sevenTimes--;
//   }
//   return myLetters;
// }

// function getOtherLetters(arr,mySevenLetters){
//   myAlphabet = [];
//   var tenTimes = 19;
//   while(tenTimes){
//     var randInt = Math.floor(Math.random() * arr.length)
//     if (arr[randInt].indexOf(mySevenLetters) === -1){
//       myAlphabet.push(arr[randInt]);
//       tenTimes--;
//     }
    
//   }
//   return myAlphabet;
// }

// function scrambleAllLetters(arr){
//   var m = arr.length, t, i;

//   // While there remain elements to shuffle…
//   while (m) {

//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = arr[m];
//     arr[m] = arr[i];
//     arr[i] = t;
//   }

//   return arr;

// }

// function joinArrays(){
//   return mySevenLetters.concat(myOtherLetters)
// }

// var mySevenLetters = getSevenLetters(letters);
// var myOtherLetters = getOtherLetters(alphabet);
// var myTotalLetters = joinArrays();
// var myScrambledLetters = scrambleAllLetters(myTotalLetters);



// function Letter(){
//   this.x = 0;
//   this.y = 0;        
//   this.width = 50;  
//   this.height = 50;
//   this.img = '';
//   this.keyCode = 0;
// }

var rightCanvas = document.getElementById('rightCanvas');
var ctx = rightCanvas.getContext('2d');
var theCanvas = document.getElementById('theCanvas');
var ctx2 = theCanvas.getContext('2d');


document.getElementById("start-button").onclick = function (){
  startGame();
};



//   Letter.prototype.drawLetter = function(canvas){
//   //ctx2.clearRect(this.x, this.y, this.width, this.height)
//   var theImage = new Image();
//   theImage.src = this.img;
//       var that = this;
//       theImage.onload = function(){
//       canvas.drawImage(theImage, that.x, that.y, that.width, that.height);
//     }
  
// }
// Game.prototype.myRandomSeven = function(arr){
//   letterArmy = [];
//   for(var i = 0; i < arr.length; i++){
//     letterArmy.push(new Letter())
//   }
//   return letterArmy
// }

// Game.prototype.myRandomSeventeen = function(arr){
//   letterArmy = [];
//   for(var i = 0; i < arr.length; i++){
//     letterArmy.push(new Letter())
//   }
//   return letterArmy
// }


// Game.prototype.fixedLetterPosition = function(letterArmy){
//   counter = 0;
//   for (var i = 0; i < letterArmy.length; i++){
//     letterArmy[i].img = 'images/'+mySevenLetters[i]+'.png';
//     letterArmy[i].y += counter;
//     letterArmy[i].keyCode = mySevenLetters[i].charCodeAt()
//     letterArmy[i].drawLetter(ctx);
//     counter += 50;
//  }


// }

// // Game.prototype.randomFall = function(letterArmy){
// //   randArr = [];
// //   newArmy = [];

// //     for (var i = 0; i < letterArmy.length; i++){
// //     newArmy.push(Object.assign(letterArmy[i]))
// //     }
  
// //     return newArmy;
// // }

// Game.prototype.fallLetterPosition = function(arr){
//   for(var i = 0; i < arr.length; i++){
//     arr[i].img = 'images/'+myScrambledLetters[i]+'.png';
//     arr[i].width = 40;
//     arr[i].height = 40;
//     arr[i].keyCode = myScrambledLetters[i].charCodeAt()
//   }
//   newArmy = [];
//   for (var i = 0, j = arr.length; i < j; i++){
//     var randInt = Math.floor(Math.random() * arr.length)
//     arr[randInt].x = Math.floor(Math.random() * 550);
//     //newArmy[randInt].drawLetter(ctx2);
//     newArmy.push(arr[randInt]);
//     arr.splice(randInt,1);

//   }
//   return newArmy
  
// }



// Game.prototype.drawFallingLetters = function(arr){
//   //console.log("arr is: ", arr);
//   var i = 0;
//   var id = setInterval(function(){
//     //console.log(arr.length);
//     if(i <= arr.length){
//       arr[i].drawLetter(ctx2);
//       arr[i].fall();
//      //console.log(i);
//       i++;
//     }else{
//       clearInterval(id);
//     }
//     },1200)
//   }

//   Letter.prototype.fall = function(){
//     var that = this;
//     var id = setInterval(function(){
//     //console.log("this.y in fall function: ", that.y)
      
//       if(that.y <= 500){
//        // console.log("heyyyy")
//         ctx2.clearRect(that.x, that.y, that.width, that.height)
//         that.y +=80;  
//         that.drawLetter(ctx2)
//       }else{
//         clearInterval(id);
//       }
//       },1200)
//   }



// Game.prototype.addLetters = function (letter){
//   this.letter.push(letter)
// }

// function startGame(){
//   var currentGame = new Game();
//   var fallingLetters;
//   var letterArmy = currentGame.myRandomSeven(mySevenLetters);
//   currentGame.fixedLetterPosition(letterArmy);
//   var scrambledArmy = currentGame.myRandomSeventeen(myScrambledLetters);
//   //newArmy = currentGame.randomFall(letterArmy);
//   for(i=0;i<scrambledArmy.length;i++){
//     //console.log(scrambledArmy[i]);
//     currentGame.addLetters(scrambledArmy[i]);
//   }

//   fallingLetters = currentGame.fallLetterPosition(currentGame.letter);
//   currentGame.drawFallingLetters(fallingLetters);
//   //console.log(fallingLetters);
//   console.log(currentGame);

//  }



function getPoints(name){
  for (var property in points) {
    if (points.hasOwnProperty(property)){
        if(name === property){
          return points[property]
        }
    }
}
}

function drawLetter(canvas){
  //ctx2.clearRect(this.x, this.y, this.width, this.height)
  var theImage = new Image();
  theImage.src = this.img;
      var that = this;
      theImage.onload = function(){
      canvas.drawImage(theImage, that.x, that.y, that.width, that.height);
    }
}
function fixedLetterPosition(letters){
  var counter = 0;
  for (var x = 0; x < letters.length; x++){
    console.log(letters);
    letters[x].y += counter;
    counter += 50;
 }
}
function startGame(){
var currentGame = new Game()
for(var i=0; i < currentGame.abc.length; i++){
  letter = new Letter();
  letter.name = currentGame.abc[i];
  letter.id = i;
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

for(var z=0; z < 26; z++){
  currentGame.addLetterFalling();
}


fixedLetterPosition(currentGame.myLetters);
console.log(currentGame);
drawLetter(currentGame.myLetters);
}


 };  