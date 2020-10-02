function Animate() {
  this.ballons = [];

  var that = this;

  this.start = function (balls) {
    for (var i = 0; i < balls; i++) {
      var ball = new Ball(document.body);

      ball.create();

      var plot = new Position(window.innerWidth, 0).create();

      ball.setPosition(plot.x, plot.y);

      var size = Math.random() * 100;

      ball.setDimensions(size, size);

      this.ballons.push(ball);

      var timeout = Math.random() * 5 * 1000;

      setTimeout(
        (function () {
          var thisBall = ball;
          return function () {
            thisBall.move();
          };
        })(),
        timeout,
      );
    }
  };

  this.remover = function () {
    setInterval(() => {
      this.ballons.filter(function (item) {
        return !item.isDeleted;
      }).forEach(function (ball) {
        var pos = ball.getPosition();

        if (pos.y > 1000) {
          ball.remove();
        }
      });
    }, 1000 / 60);
  };
}

var animate = new Animate();

animate.start(10);

animate.remover();
