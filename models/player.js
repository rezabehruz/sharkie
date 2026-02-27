class Player extends MovableObject {
  IMAGE_KEYS = ["../assets/img/1.Sharkie/1.IDLE/1.png", "../assets/img/1.Sharkie/1.IDLE/2.png", "../assets/img/1.Sharkie/1.IDLE/3.png", "../assets/img/1.Sharkie/1.IDLE/4.png", "../assets/img/1.Sharkie/1.IDLE/5.png", "../assets/img/1.Sharkie/1.IDLE/6.png", "../assets/img/1.Sharkie/1.IDLE/7.png", "../assets/img/1.Sharkie/1.IDLE/8.png", "../assets/img/1.Sharkie/1.IDLE/9.png", "../assets/img/1.Sharkie/1.IDLE/10.png", "../assets/img/1.Sharkie/1.IDLE/11.png", "../assets/img/1.Sharkie/1.IDLE/12.png", "../assets/img/1.Sharkie/1.IDLE/13.png", "../assets/img/1.Sharkie/1.IDLE/14.png", "../assets/img/1.Sharkie/1.IDLE/15.png", "../assets/img/1.Sharkie/1.IDLE/16.png", "../assets/img/1.Sharkie/1.IDLE/17.png", "../assets/img/1.Sharkie/1.IDLE/18.png"];
  spdX = 6;
  spdY = 2;
  accelaration = 0.999;
  currentImg = 0;
  backDirection = false;

  constructor(x_, y_, width_, height_) {
    super(x_, y_, width_, height_);

    this.loadImages(this.IMAGE_KEYS);
    this.playGravity();
    this.animate();
  }

  playGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.spdY > 2) {
       this.y += this.spdY;
        this.spdY = this.spdY * this.accelaration;
      } else this.accelaration = 0.999; 
    }, 100);
  }

  isAboveGround(){
    return this.y < 50;
  }

  animate() {
    setInterval(() => {
      let i = this.currentImg % this.IMAGE_KEYS.length;
      this.img = this.imgCache[this.IMAGE_KEYS[i]];
      this.currentImg++;

      if (Keyboard.arrowRight && this.x < 415) {
        this.moveRight();
      }

      if (Keyboard.arrowLeft && PlayRome.camera_x <= 0 - this.spdX) {
        this.moveLeft();
      }

      if(Keyboard.arrowUp) {
        if(this.y > -25)
        this.y -= 20;
      }

    }, 120);
  }

  moveRight() {
    this.backDirection = false;
    this.x += this.spdX;
    PlayRome.camera_x -= this.spdX;
  }

  moveLeft() {
    this.backDirection = true;
    this.x -= this.spdX;
    PlayRome.camera_x += this.spdX;
  }
}
