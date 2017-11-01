function Objects(x, y, speed) {
  var randomObjectsPositionX = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475];
  this.x = randomObjectsPositionX[Math.floor(Math.random() * ((randomObjectsPositionX.length - 0) + 0))];
  this.y = y;
  this.speed = speed;
}

Objects.prototype.draw = function () {
  var img = new Image();
  img.src = './images/ship.png';
  ctx.drawImage(img, this.x, this.y, 40, 30);
};

Objects.prototype.move = function() {
  if (timepast < 20){
    this.y += this.speed;
    console.log('voy normal');
  }
  else if (timepast < 35){
    this.y += (this.speed*2);
    console.log('voy follao loko');
  }
  else if (timepast < 50){
    this.y += (this.speed*3);
    console.log('voy follao loko');
  }
  else if (timepast < 75){
    this.y += (this.speed*4);
    console.log('voy follao loko');
  }
  else{
    this.y += (this.speed*7);
    console.log('voy a fuego niño');
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

Obstacle.prototype.left = function(){ return this.x }

Obstacle.prototype.right = function(){  return this.x + this.width  }

Obstacle.prototype.top = function(){  return this.y }

Obstacle.prototype.bottom = function(){ return this.y + this.height }
