import {Background, createBackground, drawBackground} from './Background.js';
import {clearScreen, createSnowflakes, resetSnowflakes} from './animation.js';

export class AnimatedImage {
  constructor(url, width, intensity=null) {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext('2d');
    document.getElementById("output").appendChild(this.canvas);
    this.canvas.width = width;
    this.canvas.height = 100;
    this.bg = createBackground(url, this.canvas, this.context);
    this.snowflakes = []
    this.qty = 50;

    this.setIntensity(intensity);
  }
  setIntensity(intensity) {
    if (intensity === null) {
      this.qty = Math.round( Math.random() * 350) + 50
    }
  }
  update() {
    clearScreen(this.canvas, this.context);
    drawBackground(this.bg, this.canvas, this.context);
    createSnowflakes(this.snowflakes, this.qty, this.canvas);
    this.snowflakes.forEach( s => s.draw(this.context));
    this.snowflakes.forEach( s => s.update());
    resetSnowflakes(this.snowflakes, this.qty, this.canvas);
  }
}
