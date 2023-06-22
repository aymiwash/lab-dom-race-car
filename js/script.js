window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  let newGame


  function startGame() {
    newGame = new Game
    newGame.start()
    console.log("start game");
  }


  startButton.addEventListener("click", function () {
    startGame();
  });

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case "ArrowLeft":
        newGame.player.directionX =  -2;
        break;
      case "ArrowRight":
        newGame.player.directionX = 2;
        break;
      case "ArrowUp":
        newGame.player.directionY = -2;
        break;
      case "ArrowDown":
        newGame.player.directionY = 2;
        break;
    }
  })

  document.addEventListener('keyup', (event)=>{
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowRight":  
        newGame.player.directionX =  0;
        break;
      case "ArrowUp":
      case "ArrowDown":
        newGame.player.directionY = 0;
        break;
    }
  })




};
