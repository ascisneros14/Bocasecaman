function Player(x, y, speed, radius, ctx, color) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.radius = radius;
  this.Vx = 0;
  this.Vy = 0;
  this.friction = 0.8;
  this.ctx = ctx;
  this.color = color;
  this.keys = {};
};

// Draw player
Player.prototype.draw = function () {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  this.ctx.strokeStyle = this.color;
  this.ctx.stroke();
  this.ctx.fillStyle = this.color;
  this.ctx.fill();
};

//Moving functions
Player.prototype.moveLeft = function () {
  if (this.Vx > -this.speed) {
      this.Vx--;
  }
  console.log("moveLeft was called");
};

Player.prototype.moveRight = function () {
  if (this.Vx < this.speed) {
      this.Vx++;
  }
  console.log("moveRight was called");
};

Player.prototype.moveUp = function () {
    if (this.Vy > -this.speed) {
        this.Vy--;
  }
  console.log("moveUp was called");
};

Player.prototype.moveDown = function () {
    if (this.Vy < this.speed) {
        this.Vy++;
    }
  console.log("moveDown was called");
};

Player.prototype.updatePosition = function() {
  this.Vy *= this.friction;
  this.y  += this.Vy;
  this.Vx *= this.friction;
  this.x  += this.Vx;
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


};

// Player.prototype.addPlayer = function (player) {
//   var img = new Image();
//   img.src = './images/ship.png';
//   img.onload = function() {
//   player.ctx.drawImage(img,this.x,this.y,40,80);
// }.bind(this);
// };


  // Player.prototype.moveLeft =  function() {
  //   if(this.x > 0){
  //     this.x -= 10;
  //   }
  // };
  // Player.prototype.moveRight = function() {
  //   if(this.x < 470){
  //     this.x += 10;
  //   }
  // };
  // Player.prototype.moveUp =  function() {
  //   if(this.y > 0){
  //     this.y -= 10;
  //   }
  // };
  // Player.prototype.moveDown = function() {
  //   if(this.y < 570){
  //     this.y += 10;
  //   }
  // };


// Player.prototype.shoot = function (){
// };
