(function () {
  "use strict";

  const root = this,
    game = root.SnakeGame;

  game.apple = {
    pos: {
      x: 0,
      y: 0,
    },
  };

  game.setApplePosition = function (tail) {
    while (true) {
      this.apple.pos = this.getRandomPosition();
      const exists = tail?.some((part) =>
        game.difference(part, this.apple.pos)
      );
      if (!tail?.length || !exists) break;
    }
  };

  game.drawApple = function () {
    const pos = this.apple.pos;
    this.draw(pos, this.apColor);
  };
}.call(this));
