canvas = document.getElementById('screen1');
c = canvas.getContext('2d');

console.log(canvas, c);

canvas.width = 500;
canvas.height = 500;


class Snowflake {
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

}


const snowflakes = []
const qty = 100;
function loop(time) {
  // console.log(time);
  clearScreen(c);
  createSnowflakes(qty);
  snowflakes.forEach( s => s.draw(c));
  snowflakes.forEach( s => s.update());
  destroySnowflakes(qty);

  window.requestAnimationFrame(loop);
}

function clearScreen(context) {
  context.save()
  c.fillStyle = "black";
  c.fillRect(0,0, canvas.height, canvas.width);
  context.restore()


}

function createSnowflakes(qty) {
  // const snowflakes = []
  while (snowflakes.length < qty) {
    const x = Math.round( Math.random() * canvas.width);
    const y = Math.round( Math.random() * -200);
    const radius = Math.round( Math.random() * 4) + 2;
    const spdY = Math.round( Math.random() * 3) + 1;
    const snowflake = new Snowflake(x,y,radius, 1, spdY);

    snowflakes.push(snowflake);
  }
}

function destroySnowflakes(qty) {
  snowflakes.forEach( (s, i) => {
    if (s.y > canvas.height) {
      snowflakes.splice(i, 1);
    }
  })
}


window.requestAnimationFrame(loop);
