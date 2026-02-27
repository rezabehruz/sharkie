class Background {
  width = 720;
  height = 400;
  x;
  y = 0;
  img = new Image();
  playRome;

  constructor(src_, x_) {
    this.img.src = src_;
    this.x = x_;
    
  }
}
