function Objects() {
  this.x1 = 30;
  this.y1 = 0;
  this.x2 = 100;
  this.y2 = 200;
  this.x3 = 40;
  this.y3 = 400;
}

Objects.prototype.createObjects = function(canvas) {
  canvas.ctx.fillStyle = "#FF0000";
  canvas.ctx.fillRect(this.x1, this.y1, 150, 30);
  canvas.ctx.fillRect(this.x2, this.y2, 150, 30);
  canvas.ctx.fillRect(this.x3, this.y3, 150, 30);
};

Objects.prototype.moveObjects = function() {
  if (this.y1 < 580) {
    this.y1 += 10;
  } else {
    this.y1 = 0;
    this.x1 = Math.floor(Math.random() * 100) + 30;
  }
  if (this.y2 < 580) {
    this.y2 += 10;
  } else {
    this.y2 = 0;
    this.x2 = Math.floor(Math.random() * 100) + 100;
  }
  if (this.y3 < 580) {
    this.y3 += 10;
  } else {
    this.y3 = 0;
    this.x3 = Math.floor(Math.random() * 100) + 80;
  }
};


// function Objects(width, height, x, y, color) {
//     var randomObjectsPositionX = [50, 100, 150, 200, 250, 300, 350, 400, 450];
//     this.width = width;
//     this.height = height;
//     this.x = x; //randomObjectsPositionX[Math.floor(Math.random() * ((randomObjectsPositionX.length - 0) + 0))];
//     this.y = y;
//     this.color = color;
//    }
//
// Objects.prototype.draw = function(){
//   this.ctx.fillStyle = this.color;
//   this.ctx.fillRect(this.x, this.y, this.width, this.height);
// };
//
// Objects.prototype.move = function(){
//   this.y += 10;
// };
