class EndBoss extends MovableObject {
  IMAGE_KEYS = ["../assets/img/2.Enemy/3 Final Enemy/2.floating/1.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/2.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/3.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/4.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/5.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/6.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/7.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/8.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/9.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/10.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/11.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/12.png", "../assets/img/2.Enemy/3 Final Enemy/2.floating/13.png"];

  currentImage = 0;
  spdX = 2;

  constructor(x_, y_, width_, height_) {
    super(x_, y_, width_, height_);

    this.loadImages(this.IMAGE_KEYS);

    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGE_KEYS.length;
      this.img = this.imgCache[this.IMAGE_KEYS[i]];
      this.currentImage++;
      this.x -= this.spdX;
    }, 100);
  }
}
