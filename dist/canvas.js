(function () {
  "use strict";

  const root = this,
    game = root.SnakeGame,
    body = document.querySelector("#root");

  game.setCanvas = function () {
    this.canvas = document.createElement("canvas");
    this.canvas.setAttribute("class", "game");
    this.canvas.width = this.canvas.height = this.fieldSize;
    this.ctx = this.canvas.getContext("2d");
    body.appendChild(this.canvas);
  };

  game.resetCanvas = function () {
    this.ctx.clearRect(0, 0, this.fieldSize, this.fieldSize);
  };

  game.fillCanvas = function () {
    this.ctx.fillStyle = this.bgColor;
    this.ctx.fillRect(0, 0, this.fieldSize, this.fieldSize);
  };
}.call(this));
