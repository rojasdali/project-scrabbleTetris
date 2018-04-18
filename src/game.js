var Game = function(){
    this.abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    
    this.scrabble = ['e','e','e','e','e','e','e','e','e','e','e','e',
    'a','a','a','a','a','a','a','a','a',
    'o','o','o','o','o','o','o','o',
    'n','n','n','n','n','n',
    'r','r','r','r','r','r',
    't','t','t','t','t','t',
    'l','l','l','l',
    's','s','s','s',
    'u','u','u','u',
    'd','d','d','d',
    'g','g','g',
    'b','b',
    'c','c',
    'm','m',
    'p','p',
    'f','f',
    'h','h',
    'v','v',
    'w',
    'y','y',
    'k',
    'j',
    'x',
    'q',
    'z'];

    this.myLetters = [];
    this.fallingLetters = [];
    this.alphabet = [];
    
}

Game.prototype.addLetterAlpha = function(letter){
      this.alphabet.push(letter)
}

Game.prototype.drawFallingLetters = function(arr){
    //console.log("arr is: ", arr);
    var i = 0;
    var id = setInterval(function(){
      //console.log(arr.length);
      if(i <= arr.length){
        arr[i].drawLetter(ctx2);
        arr[i].fall();
       //console.log(i);
        i++;
      }else{
        clearInterval(id);
      }
      },1200)
    }
  

Game.prototype.addLetterSide = function(letter){
    scrabbleBoard = this.scrabble;
    randNum = Math.floor(Math.random() * scrabbleBoard.length);
    scrabbleLetter = scrabbleBoard[randNum];
    for(var j = 0; j < this.alphabet.length; j++){
        if(scrabbleLetter === this.alphabet[j].name){
            letter = new Letter();
            Object.assign(letter,this.alphabet[j]);
            this.myLetters.push(letter);
        }
    }
}

Game.prototype.addLetterFalling = function(){
    alphabetBoard = this.alphabet;
    rand = Math.floor(Math.random()* alphabetBoard.length);
    fallingLetter = alphabetBoard[rand];
    letter = new Letter();
    Object.assign(letter,fallingLetter)
    this.fallingLetters.push(letter);
}




