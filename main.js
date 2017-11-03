var randomObjects = [];
var myGameArea;
var player;
var bullet;
var timepast = 0;
var ctx = document.getElementById('canvas').getContext("2d");
var canvasWidth = 500;
var canvasHeight = 600;
var arrayBullet = [];
var arrayPlayer = [];
var prueba;


window.onload = function() {
  document.getElementById('startButton').onclick = function() {
    startGame();
  };

  function startGame() {
    myGameArea = new GameArea();
    player = new Player(230, 450, 20);

  document.getElementById("lifes").innerHTML = player.lifes;


  var prueba =  setInterval(function() {
      if (timepast % 100 === 0) {
        randomObjects.push(new Objects(300, 0, 1));
        randomObjects.push(new Objects(100, 0, 1.5));
        randomObjects.push(new Objects(200, 0, 2));
        randomObjects.push(new Objects(200, 0, 0.5));
        myGameArea.counter += 1;
      }
      timepast++;
      document.getElementById("score").innerHTML = timepast++;

      if(player.lifes == 0){
        clearInterval(prueba);
        $('#gameover').removeClass('display');
      }

      for(i=0; i<randomObjects.length; i++) {
        if(checkIfOut(randomObjects[i])) {
          randomObjects.splice(i,1);
          player.lifes.pop();
          document.getElementById("lifes").innerHTML = player.lifes;
          console.log(player.lifes);
        };
      }
      for(k=0; k<arrayBullet.length; k++) {
        if(checkIfBulletOut(arrayBullet[k])) {
          arrayBullet.splice(k,1);
        };
        for(p=0; p<randomObjects.length; p++) {
          if(crashWith(arrayBullet[k], randomObjects[p])) {
            arrayBullet.splice(k,1);
            randomObjects.splice(p,1);
            console.log(bullet.top);
          };
        }
      }

      for(p=0; p<randomObjects.length; p++) {
        if(crashWith2(player, randomObjects[p])) {
          // delete window.player;
          randomObjects.splice(p,1);
        };
      }

    }, 30);

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
  for (i = 0; i < randomObjects.length; i++) {
    randomObjects[i].move();
    randomObjects[i].draw();
  }
}

function bulletDraw() {
  for (i = 0; i < arrayBullet.length; i++) {
    arrayBullet[i].move();
    arrayBullet[i].draw();
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
    // $("#tos").play();
  }
  ctx.clearRect(0, 0, 500, 600);
  myGameArea.draw();
  player.updatePosition();
  bulletDraw();
  objectsDraw();
};

function checkIfOut(object) {
  return object.y >= canvasHeight ? true : false;
}

function checkIfBulletOut(object) {
  return object.y <= 0 ? true : false;
}

function crashWith(bullet,objects){
  return !((objects.bottom() < bullet.top())    ||
           (objects.top()    > bullet.bottom()) ||
           (objects.right()  < bullet.left())   ||
           (objects.left()   > bullet.right()));
}

function crashWith2(player,objects){
  return !((objects.bottom() < player.top())    ||
           (objects.top()    > player.bottom()) ||
           (objects.right()  < player.left())   ||
           (objects.left()   > player.right()));
}
