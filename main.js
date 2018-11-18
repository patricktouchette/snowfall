import {AnimatedImage} from './AnimatedImage.js';
//AnimatedImages
// arguments:
// image Url, width, snow intensity (optional),

const animations = []
animations.push(new AnimatedImage('https://source.unsplash.com/1024x760/?snow', 500, 50));

function mainloop() {
  animations.forEach(img => img.update())
  window.requestAnimationFrame(mainloop);
}

window.requestAnimationFrame(mainloop);


document.getElementById('addImage').addEventListener( 'click', event => {
  const id = Math.round( event.timeStamp/100);
  animations.push(new AnimatedImage(`https://source.unsplash.com/1024x760/?snow&id=${id}`, 500));
})
