var randomObjects = [];
var myGameArea;
var player;
var ctx = document.getElementById('canvas').getContext("2d");

window.onload = function() {
  document.getElementById('startButton').onclick = function() {
    startGame();
  };


function startGame() {
    myGameArea = new GameArea('grey');
    player = new Player(230, 450, 20);
    myGameArea.draw();
    player.draw();

    setInterval(function() {
        if(myGameArea.counter < 15){
          randomObjects.push(new Object(30, 30, this.x, 0, myGameArea.ctx, "blue"));
          myGameArea.counter += 1;
        }
      }, 1000);


    updateGameArea();
  };
};


document.body.addEventListener("keydown", function(e) {
  player.keys[e.keyCode] = true;
  });
document.body.addEventListener("keyup", function(e) {
  player.keys[e.keyCode] = false;
  });

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
    ctx.clearRect(0, 0, 500, 600);
    myGameArea.draw();
    player.updatePosition();
    player.draw();
    objectsDraw();
};

function objectsDraw() {
  for (i = 0; i < randomObjects.length; i++) {
    randomObjects[i].move();
    randomObjects[i].draw();
  }
}


// var canvas = document.querySelector("#canvas");
// var context = canvas.getContext("2d");
//
// var posX = 0;
// var posY = 0;
//
// context.rect(posX, posY, 50, 50);
// context.stroke();
//
// function move(e) {
//   // alert(e.keyCode)
//   if(e.keyCode == 39) {
//     posX += 10;
//   }
//   if(e.keyCode == 37) {
//     posX -= 10;
//   }
//   if(e.keyCode == 38) {
//     posY -= 10;
//   }
//   if(e.keyCode == 40) {
//     posY += 10;
//   }
//
//   canvas.width = canvas.width;
//   context.rect(posX, posY, 50, 50);
//   context.stroke()
// }
//
// document.onkeydown = move;
