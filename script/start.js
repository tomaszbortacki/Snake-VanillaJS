(function () {
  "use strict";

  const root = this,
    game = root.SnakeGame;

  game.start = () => {
    game.setCanvas();
    game.setApplePosition();
    game.loop();
  };

  game.increaseSpeed = () => {
    game.speed += game.speedIncrease;
  };

  game.loop = () => {
    game.resetCanvas();
    game.fillCanvas();
    game.drawTail();
    game.drawApple();
    game.drawSnake();
    game.detectTailCollision();
    game.eat();
    if (game.start) setTimeout(game.loop, game.speed);
  };

  game.start();
  console.log(game);
}.call(this));
