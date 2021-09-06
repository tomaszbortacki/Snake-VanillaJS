(function () {
  "use strict";

  const root = this,
    game = root.SnakeGame;

  game.mvDirection = { x: 0, y: 0 };
  game.detectControls = function () {
    const setDirection = ({ keyCode }) => {
      if (game.lockBackword === keyCode) return;
      const dir = this.mvDirection;
      switch (keyCode) {
        case 37:
          game.lockBackwordTemp = 39;
          dir.x = -1;
          dir.y = 0;
          break;
        case 38:
          game.lockBackwordTemp = 40;
          dir.x = 0;
          dir.y = -1;
          break;
        case 39:
          game.lockBackwordTemp = 37;
          dir.x = 1;
          dir.y = 0;
          break;
        case 40:
          game.lockBackwordTemp = 38;
          dir.x = 0;
          dir.y = 1;
          break;
        case 187:
          game.speed -= 20;
          break;
        case 189:
          game.speed += 20;
          break;
      }
    };
    window.addEventListener("keydown", setDirection);
  };

  game.detectControls();
}.call(this));
