class PlayRome {
  can;
  ctx;

  backGround_Objects;
  enemies;
  

  static camera_x = 0;

  constructor(canvas) {
    this.can = canvas;
    this.ctx = canvas.getContext("2d");
    
    this.player = new Player(10, -20, 80, 100);

    this.backGround_Objects = level1.backGround_objects;

    this.enemies = level1.enemies;

    this.draw();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.can.width, this.can.height);

    this.ctx.translate(PlayRome.camera_x, 0);

    this.backGround_Objects.forEach((bg_object) => {
      this.drawObject(bg_object);
    });

    this.drawObject(this.player);

    this.enemies.forEach((enemy)=> this.drawObject(enemy));

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
