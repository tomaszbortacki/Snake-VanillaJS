(function () {
  "use strict";

  const root = this,
    Game = function () {
      this.fieldSize = 1000;
      this.snakeSize = this.fieldSize / 30;
      this.speed = 50;
      this.speedIncrease = 10;
      this.tolerance = 0.01;
      this.score = 0;
      this.lockBackword = 0;
      this.lockBackwordTemp = 0;
      this.start = true;
      this.snColor = "#ffffff";
      this.apColor = "#dc3545";
      this.bgColor = "#20c997";
    };

  root.SnakeGame = new Game();
}.call(this));
