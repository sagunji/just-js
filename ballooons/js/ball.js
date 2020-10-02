class Ball {
  constructor(container) {
    this.intervalId = null;

    this.container = container;

    this.isDeletable = false;

    this.isDeleted = false;
    this.ball = document.createElement("div");

    this.dx = 1;
    this.dy = 1;
  }

  create() {
    var ballColor = (color[parseInt(Math.random() * color.length)]);
    this.ball.style.backgroundColor = ballColor;

    this.ball.style.position = "absolute";
    this.ball.style.borderRadius = "50%";

    this.container.appendChild(this.ball);

    this.ball.addEventListener(
      "click",
      (function () {
        let that = this;

        return function () {
          if (that.isDeletable) {
            that.container.style.backgroundColor =
              that.ball.style.backgroundColor;

            that.remove();
          }
        };
      }).bind(this)(),
    );
  }

  remove() {
    this.container.removeChild(this.ball);

    clearInterval(this.intervalId);

    this.isDeleted = true;
  }

  setDimensions(w, h) {
    this.ball.style.width = w + "px";
    this.ball.style.height = h + "px";
  }

  setPosition(x, y) {
    this.ball.style.left = x + "px";
    this.ball.style.top = y + "px";
  }

  getPosition() {
    return {
      x: parseInt(this.ball.style.left),
      y: parseInt(this.ball.style.top),
    };
  }

  whichSide(top, left, height) {
    if (top >= (window.innerHeight - height)) {
      this.dy = -1;
    }

    if (top <= 0) {
      this.dy = 1;
    }

    if (left >= (window.innerWidth - height)) {
      this.dx = -1;
    }

    if (left <= 0) {
      this.dx = 1;
    }
  }

  move() {
    this.isDeletable = true;

    var movement = Math.ceil(Math.random() * 5);

    var height = parseInt(this.ball.style.height);

    this.intervalId = setInterval(
      (function () {
        var myBall = this.ball;

        var that = this;

        return function () {
          var currentTop = parseInt(myBall.style.top);
          var currentLeft = parseInt(myBall.style.left);

          that.whichSide(currentTop, currentLeft, height);

          var nextTop = currentTop + movement * that.dy;
          var nextLeft = currentLeft + movement * that.dx;

          myBall.style.top = nextTop + "px";
          myBall.style.left = nextLeft + "px";
        };
      }).bind(this)(),
      1000 / 60,
    );
  }
}
