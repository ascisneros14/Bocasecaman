function Player(width, height, x, y, ctx, color) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
}

Player.prototype.draw = function(){
this.ctx.fillStyle = this.color;
this.ctx.fillRect(this.x, this.y, this.width, this.height);
};
  Player.prototype.moveLeft =  function() {
    if(this.x > 0){
      this.x -= 10;
    }
  };
  Player.prototype.moveRight = function() {
    if(this.x < 470){
      this.x += 10;
    }
  };
  Player.prototype.moveUp =  function() {
    if(this.y > 0){
      this.y -= 10;
    }
  };
  Player.prototype.moveDown = function() {
    if(this.y < 570){
      this.y += 10;
    }
  };


Player.prototype.shoot = function (){
};

// function Player(width, height, color, x, y, lifes) {
//     this.width = width;
//     this.height = height;
//     this.x = x;
//     this.y = y;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.lifes = lifes
//     this.update = function(){
//        ctx = Player.context;
//        ctx.fillStyle = color;
//        ctx.fillRect(this.x, this.y, this.width, this.height);
//    }
// }
//
// Player.prototype.
