function Bullet(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = 5;
  this.height = 10;
}

Bullet.prototype.draw = function () {
  var img = new Image();
  img.src = './images/bullet.png';
  ctx.drawImage(img,this.x,this.y,this.width, this.height);
};

Bullet.prototype.move = function(){
  this.y -= 5;
};

Bullet.prototype.updatePosition = function(){
  this.draw();
};

Bullet.prototype.left = function(){ return this.x; };

Bullet.prototype.right = function(){  return this.x + this.width; };

Bullet.prototype.top = function(){  return this.y; };

Bullet.prototype.bottom = function(){ return this.y + this.height; };
