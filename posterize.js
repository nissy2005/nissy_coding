let img;

function preload() {
  img = loadImage("sunflower.jpg");
}

function setup() {
  createCanvas(400, 400);
  noLoop(); // Only draw once until mouse interaction
}

function draw() {
  background(0);
  drawPosterizedImage();
}

function mouseMoved() {
  redraw(); // Redraw canvas on mouse move
}

function drawPosterizedImage() {
  image(img, 0, 0);
  let levels = int(map(mouseX, 0, width, 2, 20));
  applyPosterizeFilter(levels);
}

function applyPosterizeFilter(levels) {
  loadPixels();
  let d = pixelDensity();
  let pixelCount = 4 * width * height * d * d;

  for (let i = 0; i < pixelCount; i += 4) {
    pixels[i] = quantize(pixels[i], levels);       // Red
    pixels[i + 1] = quantize(pixels[i + 1], levels); // Green
    pixels[i + 2] = quantize(pixels[i + 2], levels); // Blue
  }

  updatePixels();
}

function quantize(value, levels) {
  let step = 255 / (levels - 1);
  return round(value / step) * step;
}
