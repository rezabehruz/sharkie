class Background {
  width = 350;
  height = 150;
  x;
  y = 0;
  img = new Image();
  playRome;

  constructor(src_, x_) {
    this.img.src = src_;
    this.x = x_;
    
  }
}
