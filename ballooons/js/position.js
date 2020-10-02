class Position {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  create() {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
    };
  }
}
