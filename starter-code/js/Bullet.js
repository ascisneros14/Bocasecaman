function Bullet(x, y){
  this.x = x;
  this.y = y;
}

Bullet.prototype.draw = function () {
  var img = new Image();
  img.src = './images/bullet.png';
  ctx.drawImage(img,this.x,this.y,5,10);
};

Bullet.prototype.move = function(){
  this.y -= 5;
};

Bullet.prototype.updatePosition = function(){
  this.draw();
};

Obstacle.prototype.left = function(){ return this.x }

Obstacle.prototype.right = function(){  return this.x + this.width  }

Obstacle.prototype.top = function(){  return this.y }

Obstacle.prototype.bottom = function(){ return this.y + this.height }
