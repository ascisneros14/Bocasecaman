function GameArea (x, y, width, height, speed) {
  this.x = x;
  this.y = y;
	this.width = 0;
	this.height = 0;
  this.speed = 1;
  this.counter = 0;
};

GameArea.prototype.draw = function () {
  var img = new Image();
  img.src = './images/space.png';
  ctx.drawImage(img,0,0,500,600);
};
