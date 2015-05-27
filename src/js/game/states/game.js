var game = {}
  , graphics = null
  , properties = require('../properties')

  , numberOfLines = 50
  , smallRadix = []
  , wideRadix = []
  , x = 0
  , y1 = 0
  , y2 = 0
  , maxWidth = properties.size.x
  , padding = 20
  , inc = Math.PI / 270;

game.create = function () {
  graphics = game.add.graphics(0, 0);

  game.stage.backgroundColor = 0x002B37;

  smallRadix = Array.apply(null, new Array(numberOfLines)).map(Number.prototype.valueOf, 0);
  wideRadix = Array.apply(null, new Array(numberOfLines)).map(Number.prototype.valueOf, 0);
};

game.update = function () {

  graphics.clear();

  graphics.lineStyle(1, 0x27A911, 1);
  graphics.beginFill(0x27A911);

  for (var i = 0; i <= numberOfLines -1; i++) {
    x = padding + maxWidth / numberOfLines * i;
    y1 = 150 + Math.sin(smallRadix[i]) * 50 + padding;
    y2 = 150 + Math.sin(wideRadix[i]) * 120 + padding;

    graphics.moveTo(x, y1);
    graphics.lineTo(x, y2);

    smallRadix[i] += inc * ((i + 10) * 0.2);
    wideRadix[i] += inc * ((i + 15) * 0.2);
  }

};

module.exports = game;
