class PlayRome {
  can;
  ctx;

  backGroundImg = new Image();
  backGroundSrc = "../assets/img/3. Background/Legacy/Light/1.png";

  constructor(canvas) {
    this.can = canvas;
    this.ctx = canvas.getContext("2d");
    this.backGroundImg.src = this.backGroundSrc;

    this.player = new Player(10, 10, 80, 100);
    this.enemy1 = new Enemy(250, 60, 35, 27);
    this.enemy2 = new Enemy(200, 60, 35, 27);
    

    this.draw();
  }

  draw() {
    this.ctx.clearRect(0 ,0 ,this.can.width, this.can.height);

    this.ctx.drawImage(this.backGroundImg, 0, 0, this.can.width, this.can.height);

    this.drawObject(this.player);
    this.drawObject(this.enemy1);
    this.drawObject(this.enemy2);

    let self = this;
    requestAnimationFrame(() => self.draw() );
  }

  drawObject(obj) {
    this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);
  }
}
