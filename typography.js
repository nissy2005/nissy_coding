let customFont1, customFont2, customFont3;

function preload() {
  // Load custom fonts
  customFont1 = loadFont('BlackOpsOne-Regular.ttf');
  customFont2 = loadFont('Comfortaa-Light.ttf');
  customFont3 = loadFont('ShadowsIntoLight.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set background color
  background(255, 200, 200); // Light red background
}

function draw() {
  // Clear the background each frame
  background(255, 200, 200); // Ensure the background is consistently red

  // Display text using custom fonts
  textFont(customFont1); // Set custom font
  textSize(48); // Set text size
  fill(0); // Set text color to black
  text('Bath Spa', 100, 100); // Display text

  textFont(customFont2); // Set custom font
  textSize(48); // Set text size
  fill(0); // Set text color to black
  text('Bath Spa', 100, 200); // Display text

  textFont(customFont3); // Set custom font
  textSize(48); // Set text size
  fill(0); // Set text color to black
  text('Bath Spa', 100, 300); // Display text
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
