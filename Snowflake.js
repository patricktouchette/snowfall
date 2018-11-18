export class Snowflake {
  constructor(x,y, radius, spdX, spdY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.spdX = spdX;
    this.spdY = spdY;
  }
  draw(context) {
    context.save()
    context.fillStyle = "white";
    context.beginPath();
    context.arc( this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fill();
    context.restore()
  }
  update() {
    this.y += this.spdY;
  }
  reset() {
    this.y = Math.round( Math.random() * -300);
  }

}
