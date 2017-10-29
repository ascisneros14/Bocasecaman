window.onload = function startGame() {
  $( document ).ready(function() {
  var myGameArea = new GameArea("blue");
  var player = new Player(30, 30, 230, 560, myGameArea.ctx, "red");
  myGameArea.draw();
  player.draw();

  $(document).keydown(function(e) {
      switch (e.which) {
        case 37: player.moveLeft();
        break;
        case 39: player.moveRight();
        break;
        case 38: player.moveUp();
        break;
        case 40: player.moveDown();
        break;
      }
      myGameArea.update(player);
    });
});
}

// var myObstacles = [];
// var player;
// var myGameArea;
// $( document ).ready(function() {
//             //Ejecuta todo el codigo , fijense paso a paso el flujo
//   myGameArea = new GameArea();
//   myGameArea.start();
//   player = new Obstacle(30, 30, "red", 0, 110);
// });



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
