var randomObjects = [];
var myGameArea;
var player;
var bullet;
var timepast = 0;
var ctx = document.getElementById('canvas').getContext("2d");
var canvasWidth = 500;
var canvasHeight = 600;
var arrayBullet = [];

window.onload = function() {
  document.getElementById('startButton').onclick = function() {
    startGame();
  };


  function startGame() {
    myGameArea = new GameArea();
    player = new Player(230, 450, 20);
    // bullet = new Bullet(player.x + 35, player.y + 35);
    // objects = new Objects(230, 50, 10);
    //myGameArea.draw();
    //player.draw();
    // objects.draw();


    setInterval(function() {

      if (myGameArea.counter < 1000) {
        randomObjects.push(new Objects(300, 0, 1));
        randomObjects.push(new Objects(100, 0, 1.5));
        randomObjects.push(new Objects(200, 0, 2));
        myGameArea.counter += 1;
        timepast++;
        console.log('puntuacion' + timepast);
      }
    }, 2000);

    updateGameArea();
  };
};


document.body.addEventListener("keydown", function(e) {
  player.keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  player.keys[e.keyCode] = false;
});

function objectsDraw() {
  for (i = 0; i < arrayBullet.length; i++) {
    arrayBullet[i].move();
    arrayBullet[i].draw();
  }
}

function bulletDraw() {
  for (i = 0; i < randomObjects.length; i++) {
    randomObjects[i].move();
    randomObjects[i].draw();
  }
}

function updateGameArea() {
  requestAnimationFrame(updateGameArea);

  if (player.keys[38]) {
    player.moveUp();
  }

  if (player.keys[40]) {
    player.moveDown();
  }

  if (player.keys[39]) {
    player.moveRight();
  }

  if (player.keys[37]) {
    player.moveLeft();
  }

  if (player.keys[49]) {
    player.bullet();
  }
  ctx.clearRect(0, 0, 500, 600);
  myGameArea.draw();
  player.updatePosition();
  bulletDraw();
  objectsDraw();
};

Obstacle.prototype.crashWith = function(obstacle){
//Condiciones que usamos para comprobar la colision
//daros cuenta que devolvemos False cuando dentro de ella se
//comprueba que son true
  return !((this.bottom() < obstacle.top())    ||
           (this.top()    > obstacle.bottom()) ||
           (this.right()  < obstacle.left())   ||
           (this.left()   > obstacle.right()))
}
