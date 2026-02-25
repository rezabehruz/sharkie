class MovableObject {
  width;
  height;
  x;
  y;
  img = new Image();
  imgCache = {};

  constructor(x_, y_, width_, height_) {
    this.x = x_;
    this.y = y_;
    this.width = width_;
    this.height = height_;
  }

  loadImages(arr) {
    arr.forEach((imgSrc) => {
      let img = new Image();
      img.src = imgSrc;
      this.imgCache[imgSrc] = img;
    });
  }
}
