export function createBackground(url, canvas, context) {
  const image = new Image();
  image.src = url;
  image.onload = function() {
    const ratio = image.naturalWidth / image.naturalHeight
    canvas.height = canvas.width / ratio;
  }
  return image;
}

export function drawBackground(image, canvas, context) {
  context.drawImage(image,
    0, 0, image.naturalWidth, image.naturalHeight,  //Source image x,y, width, height
    0, 0, canvas.width, canvas.height); //canvas x,y,width,height
}
