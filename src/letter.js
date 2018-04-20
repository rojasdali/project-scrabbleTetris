var Letter = function(){
    this.name = '';
    this.img = '';
    this.keyCode = 0;
    this.points = 0;
    this.height = 0;
    this.width = 0;
    this.points = 0;
    
}

var theCanvas = document.getElementById('theCanvas');
var ctx2 = theCanvas.getContext('2d');
var rightCanvas = document.getElementById('rightCanvas');
var ctx = rightCanvas.getContext('2d');
var leftCanvas = document.getElementById('leftCanvas');
var ctx4 = leftCanvas.getContext('2d');
var bottomCanvas = document.getElementById('bottomCanvas')
var ctx3 = bottomCanvas.getContext('2d');
// fall animations on letters
Letter.prototype.fall = function(){
    var that = this;
    that.y = 1
    var id = setInterval(function(){     
      if(that.y <= 500){
        ctx2.clearRect(that.x, that.y, that.width, that.height)
        that.y +=52;  
        that.drawLetter(ctx2)
      }else{
        clearInterval(id);
      }
      },1200)
  }
// paint the letter
  Letter.prototype.drawLetter = function(canvas){
    var theImage = new Image();
    theImage.src = this.img;
        var that = this;
        theImage.onload = function(){
        canvas.drawImage(theImage, that.x, that.y, that.width, that.height);
      }
  }

  Letter.prototype.clearLetter = function(canvas){
        canvas.clearRect(this.x, this.y, this.width, this.height)
 
  }