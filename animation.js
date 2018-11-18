import {Snowflake} from './Snowflake.js';

export function clearScreen(canvas, context) {
  context.save()
  context.fillStyle = "black";
  context.fillRect(0,0, canvas.width, canvas.height);
  context.restore()
}

export function createSnowflakes(snowflakes, qty, canvas) {
  while (snowflakes.length < qty) {
    const x = Math.round( Math.random() * canvas.width);
    const y = Math.round( Math.random() * -300);
    const radius = Math.round( Math.random() * 2) + 1;
    const spdY = Math.round( Math.random() * 3) + 1;
    const snowflake = new Snowflake(x,y,radius, 1, spdY);

    snowflakes.push(snowflake);
  }
}

export function resetSnowflakes(snowflakes, qty, canvas) {
  snowflakes.forEach( (s, i) => {
    if (s.y > canvas.height) {
      s.reset();
    }
  })
}
