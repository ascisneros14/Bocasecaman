function Player(x, y, speed) {
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 130;
  this.speed = speed;
  this.Vx = 0;
  this.Vy = 0;
  this.friction = 0.8;
  this.keys = {};
  this.lifes = [1,2,3,4,5,6,7,8,9,10];
};

// Draw player
Player.prototype.draw = function () {
  var img = new Image();
  img.src = './images/bocasecaman.png';
  ctx.drawImage(img,this.x,this.y,this.width,this.height);
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


Player.prototype.bullet = function (){
  bullet = new Bullet(player.x, player.y);
  arrayBullet.push(new Bullet(player.x +35, player.y));
};


Player.prototype.left = function(){ return this.x; };

Player.prototype.right = function(){  return this.x + this.width;  };

Player.prototype.top = function(){  return this.y; };

Player.prototype.bottom = function(){ return this.y + this.height; };


Player.prototype.updatePosition = function() {
  this.Vy *= this.friction;
  this.y  += this.Vy;
  this.Vx *= this.friction;
  this.x  += this.Vx;
  if (this.x >= 455) {
        this.x = 455;
    } else if (this.x <= -25) {
        this.x = -25;
    }

    if (this.y > 480) {
        this.y = 480;
    } else if (this.y <= 50) {
        this.y = 50;
    }
    this.draw();

};
