(function () {
  "use strict";

  const root = this,
    game = root.SnakeGame;

  const snakeDefaultPosition = game.getRandomPosition();

  game.snake = {
    pos: snakeDefaultPosition,
    lastPos: snakeDefaultPosition,
    tail: [],
  };

  game.getSnakeSpeed = function (dir) {
    return dir * this.snakeSize;
  };

  game.setSnakePosition = function () {
    const dir = this.mvDirection,
      pos = this.snake.pos;

    this.snakeLastPos = { ...pos };
    pos.x += this.getSnakeSpeed(dir.x);
    pos.y += this.getSnakeSpeed(dir.y);

    if (pos.x <= -this.tolerance) pos.x = this.fieldSize - this.snakeSize;
    if (pos.y <= -this.tolerance) pos.y = this.fieldSize - this.snakeSize;

    if (pos.x >= this.fieldSize - this.tolerance) pos.x = 0;
    if (pos.y >= this.fieldSize - this.tolerance) pos.y = 0;

    this.setNewLock();
    return pos;
  };

  game.setTailPositions = function () {
    const lastPos = this.snake.lastPos;

    let tail = [...this.snake.tail].reverse();
    tail = tail.map((part, index) => {
      return index >= tail.length - 1 ? { ...lastPos } : { ...tail[index + 1] };
    });

    this.snake.tail = [...tail].reverse();
  };

  game.drawSnake = function () {
    const newPos = this.setSnakePosition();
    this.draw(newPos, this.snColor);
  };

  game.drawTail = function () {
    this.snake.tail.forEach((part) => {
      this.draw(part, this.snColor);
    });
  };

  game.eat = function () {
    const snPos = this.snake.pos;
    const apPos = this.apple.pos;
    if (this.difference(snPos, apPos)) {
      this.setApplePosition(this.snake.tail);
      this.gainTail();
    } else {
      this.setTailPositions();
    }
  };

  game.gainTail = function () {
    const lastPos = this.snake.lastPos;
    this.snake.tail = [{ ...lastPos }, ...this.snake.tail];
  };

  game.detectTailCollision = function () {
    let tail = this.snake.tail;
    if (!tail.length) return;

    const pos = this.snake.pos;
    const collision = tail.some((part) => this.difference(part, pos));
    if (collision) this.snake.tail = [];
  };
}.call(this));
