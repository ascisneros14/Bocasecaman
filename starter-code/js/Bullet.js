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
  this.y += 20;
};

Bullet.prototype.updatePosition = function() {

bullet.draw();

};
