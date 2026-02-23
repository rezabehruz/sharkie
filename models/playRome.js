class PlayRome {
  can;
  ctx;

  constructor(canvas) {
    this.can = canvas;
    this.ctx = canvas.getContext("2d");

    

    this.draw();

  }

  draw(){
        this.ctx.clearRect(0 ,0 ,this.can.width, this.can.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(20, 20, 200, 100);
        let self = this;

        requestAnimationFrame(() => self.draw() );
    }
}
