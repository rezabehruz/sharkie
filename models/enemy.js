class Enemy extends MovableObject {
  IMAGE_KEYS = [
    "../assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition1.png",
    "../assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition2.png",
    "../assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition3.png",
    "../assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition4.png",
    "../assets/img/2.Enemy/1.Puffer fish (3 color options)/2.transition/2.transition5.png"
  ];

  spdX = -0.3;
  currentImg = 0;

  constructor(x_, y_, width_, height_) {
    super(x_, y_, width_, height_);

    this.loadImages(this.IMAGE_KEYS);

    this.animate();
  }

  animate(){
    setInterval(() => {
          let i = this.currentImg % this.IMAGE_KEYS.length;
      this.img = this.imgCache[this.IMAGE_KEYS[i]];
      this.currentImg++;
    }, 400);
    setInterval(()=>{
      this.x += this.spdX;
    }, 1000 / 30)
  }
}
