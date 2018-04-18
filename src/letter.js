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
Letter.prototype.fall = function(){
    var that = this;
    var id = setInterval(function(){     
      if(that.y <= 500){
        ctx2.clearRect(that.x, that.y, that.width, that.height)
        that.y +=80;  
        that.drawLetter(ctx2)
      }else{
        clearInterval(id);
      }
      },1200)
  }

  Letter.prototype.drawLetter = function(canvas){
    var theImage = new Image();
    theImage.src = this.img;
        var that = this;
        theImage.onload = function(){
        canvas.drawImage(theImage, that.x, that.y, that.width, that.height);
      }
  }