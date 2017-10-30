window.onload = function startGame() {
  $( document ).ready(function() {
      var canvas = document.getElementById('board');
      var ctx = canvas.getContext('2d');
      var myGameArea = new GameArea('rgba(0, 0, 0, 0)');
      var player = new Player(100, 300, 20, 20, myGameArea.ctx, "red");
      myGameArea.draw();
      player.draw();

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
        ctx.clearRect(0, 0, 690, 690);
        myGameArea.draw();
        player.updatePosition();
        player.draw();
    };

    document.body.addEventListener("keydown", function (e) {
      player.keys[e.keyCode] = true;

    });
    document.body.addEventListener("keyup", function (e) {
      player.keys[e.keyCode] = false;
    });

    updateGameArea();
});
};



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
