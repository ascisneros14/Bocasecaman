function Player(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.Vx = 0;
  this.Vy = 0;
  this.friction = 0.8;
  this.keys = {};
};

// Draw player
Player.prototype.draw = function () {
  var img = new Image();
  img.src = './images/bocasecaman.png';
  ctx.drawImage(img,this.x,this.y,50,130);
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
  if (this.x >= 455) {
        this.x = 455;
    } else if (this.x <= -5) {
        this.x = -5;
    }

    if (this.y > 480) {
        this.y = 480;
    } else if (this.y <= 50) {
        this.y = 50;
    }
player.draw();

};




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
