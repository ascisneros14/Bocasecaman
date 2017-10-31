function GameArea (x, y) {
  this.x = x;
  this.y = y;
};

GameArea.prototype.draw = function () {
  var img = new Image();
  img.src = './images/space.png';
  ctx.drawImage(img,0,0,500,600);
};
