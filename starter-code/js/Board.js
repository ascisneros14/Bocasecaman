function GameArea(color) {
    this.ctx = document.getElementById('board').getContext('2d');
    this.color = color;
  }
GameArea.prototype.draw = function (){
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(0,0,500,600);
}
GameArea.prototype.update = function (player){
  this.ctx.clearRect(0,0,500,600);
  this.draw();
  player.draw();
}
