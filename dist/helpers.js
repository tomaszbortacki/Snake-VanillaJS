(function () {
  "use strict";

  const root = this,
    game = root.SnakeGame;

  game.draw = function (pos, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(pos.x, pos.y, this.snakeSize, this.snakeSize);
  };

  game.getRandomPosition = function () {
    const max = this.fieldSize / this.snakeSize;
    return {
      x: Math.floor(Math.random() * max) * this.snakeSize,
      y: Math.floor(Math.random() * max) * this.snakeSize,
    };
  };

  game.difference = function (pos1, pos2) {
    return (
      Math.abs(pos1.x - pos2.x) + Math.abs(pos1.y - pos2.y) <= this.tolerance
    );
  };

  game.setNewLock = function () {
    this.lockBackword = this.lockBackwordTemp;
  };
}.call(this));
