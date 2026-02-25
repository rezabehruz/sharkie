class PlayRome {
  can;
  ctx;

  backGround_Objects;

  static camera_x = 0;

  constructor(canvas) {
    this.can = canvas;
    this.ctx = canvas.getContext("2d");

    this.backGround_Objects = [new Background("../assets/img/3. Background/Legacy/Layers/5. Water/D1.png", 0, this), new Background("../assets/img/3. Background/Legacy/Layers/5. Water/D2.png", 300, this), new Background("../assets/img/3. Background/Legacy/Layers/2. Floor/D1.png", 0, this), new Background("../assets/img/3. Background/Legacy/Layers/2. Floor/D2.png", 300, this)];

    this.player = new Player(10, 10, 80, 100);
    this.enemy1 = new Enemy(250, 60, 35, 27);
    this.enemy2 = new Enemy(200, 60, 35, 27);

    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.can.width, this.can.height);

    this.ctx.translate(PlayRome.camera_x, 0);

    this.backGround_Objects.forEach((bg_object) => {
      this.drawObject(bg_object);
    });

    this.drawObject(this.player);
    this.drawObject(this.enemy1);
    this.drawObject(this.enemy2);

    this.ctx.translate(-PlayRome.camera_x, 0);

    let self = this;
    requestAnimationFrame(() => self.draw());
  }

  drawObject(obj) {
    if (obj.backDirection) {
      this.ctx.save();
      this.ctx.translate(obj.width, 0);
      this.ctx.scale(-1, 1);
      obj.x = obj.x * -1;
    }

    this.ctx.drawImage(obj.img, obj.x, obj.y, obj.width, obj.height);

    if (obj.backDirection) {
      this.ctx.restore();
      obj.x = obj.x * -1;
    }
  }
}
