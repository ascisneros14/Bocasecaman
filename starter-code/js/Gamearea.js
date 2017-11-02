function GameArea (x, y, width, height) {
  this.x = x;
  this.y = y;
	this.width = 0;
	this.height = 0;
  this.counter = 0;
};

GameArea.prototype.draw = function () {
  var img = new Image();
  img.src = './images/fondocanvas.jpg';
  ctx.drawImage(img,0,0,500,600);
};
