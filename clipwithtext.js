function setup() {
  createCanvas(400, 550); // Canvas size
  background(0, 128, 255); // Blue background color

  // Create the first graphics buffer for the yellow circle
  let cnv4 = createGraphics(width, height);
  let ctx2 = cnv4.canvas.getContext("2d");
  // Draw the clipping rectangle
  cnv4.rect(100, 200, 200, 200);
  // Clip to the rectangle
  ctx2.clip();
  // Draw the yellow circle inside the clipped area
  cnv4.fill(255, 255, 0);
  cnv4.circle(200, 300, 100); // Center the circle inside the clipping area
  // Display the clipped circle
  image(cnv4, 0, 0);

  // Create the second graphics buffer for the "hello" text with an erase effect
  let cnv3 = createGraphics(width, height);
  cnv3.fill(255, 0, 0); // Red color for text background
  // Draw the rectangle
  cnv3.rect(100, 200, 200, 200);
  // Erase the text area
  cnv3.erase();
  cnv3.textSize(100);
  cnv3.text('hello', 120, 300);
  cnv3.noErase();
  // Display the text
  image(cnv3, 0, 0);
}
