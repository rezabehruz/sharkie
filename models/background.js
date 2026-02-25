class Background {
  width;
  height;
  x;
  y;
  img = new Image();
  playRome;

  constructor(src_, x_,playRome) {
    this.img.src = src_;
    this.x = x_;
    this.y = 0;
    this.width = playRome.can.width;
    this.height = playRome.can.height;
  }
}
