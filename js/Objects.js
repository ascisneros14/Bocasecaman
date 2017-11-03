function Objects(x, y, speed) {
  var randomObjectsPositionX = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475];
  this.x = randomObjectsPositionX[Math.floor(Math.random() * ((randomObjectsPositionX.length - 0) + 0))];
  this.y = y;
  this.width = 40;
  this.height = 30;
  this.speed = speed;
}

Objects.prototype.draw = function () {
  var img = new Image();
  img.src = './images/nubes.png';
  ctx.drawImage(img, this.x, this.y, this.width, this.height);
};

Objects.prototype.move = function() {
  if (myGameArea.counter < 20){
    this.y += this.speed;
    //console.log('voy normal');
  }
  else if (myGameArea.counter < 35){
    this.y += (this.speed*2);
    //console.log('voy follao loko');
  }
  else if (myGameArea.counter < 50){
    this.y += (this.speed*3);
    //console.log('voy follao loko');
  }
  else if (myGameArea.counter < 75){
    this.y += (this.speed*4);
    //console.log('voy follao loko');
  }
  else{
    this.y += (this.speed*7);
    //console.log('voy a fuego niño');
  }

};

Objects.prototype.updatePosition = function() {
  if (this.x >= 480) {
        this.x = 480;
    } else if (this.x <= 20) {
        this.x = 20;
    }

    if (this.y > 580) {
        this.y = 580;
    } else if (this.y <= 20) {
        this.y = 20;
    }
objects.draw();

};

Objects.prototype.left = function(){
  return this.x;
};

Objects.prototype.left = function(){ return this.x; };

Objects.prototype.right = function(){  return this.x + this.width;  };

Objects.prototype.top = function(){  return this.y; };

Objects.prototype.bottom = function(){ return this.y + this.height; };
