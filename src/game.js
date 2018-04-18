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

Game.prototype.addLetterSide = function(){
    scrabbleBoard = this.scrabble;
    randNum = Math.floor(Math.random() * scrabbleBoard.length);
    scrabbleLetter = scrabbleBoard[randNum];
    var count = 0;
    for(var j = 0; j < this.alphabet.length; j++){
        if(scrabbleLetter === this.alphabet[j].name){
        this.myLetters.push(this.alphabet[j]);
        }
    }
}

Game.prototype.addLetterFalling = function(){
    alphabetBoard = this.alphabet;
    rand = Math.floor(Math.random()* alphabetBoard.length);
    fallingLetter = alphabetBoard[rand];
    this.fallingLetters.push(fallingLetter);
}




