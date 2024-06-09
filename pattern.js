function setup() {
  createCanvas(400, 400);
  background(255); // Set background color to white
  noLoop(); // Stop the draw loop
}

function draw() {
  let numFaces = 10; // Number of smiling faces in the circular pattern
  let radius = 150; // Radius of the circular pattern
  let centerX = width / 2; // X coordinate of the center
  let centerY = height / 2; // Y coordinate of the center
  
  // Draw the circular pattern of smiling faces
  for (let i = 0; i < numFaces; i++) {
    let angle = map(i, 0, numFaces, 0, TWO_PI); // Calculate angle for each face
    let x = centerX + cos(angle) * radius; // Calculate x coordinate
    let y = centerY + sin(angle) * radius; // Calculate y coordinate
    
    drawSmilingFace(x, y, 30); // Draw a smiling face at the calculated position
  }
}

function drawSmilingFace(x, y, size) {
  // Draw head
  fill(255, 220, 150); // Yellowish color for the head
  ellipse(x, y, size, size);

  // Draw eyes
  let eyeSize = size * 0.15; // Size of the eyes
  let eyeOffset = size * 0.25; // Offset from the center for the eyes
  fill(0); // Black color for the eyes
  ellipse(x - eyeOffset, y - eyeOffset * 0.5, eyeSize, eyeSize); // Left eye
  ellipse(x + eyeOffset, y - eyeOffset * 0.5, eyeSize, eyeSize); // Right eye

  // Draw mouth (smile)
  let mouthSize = size * 0.3; // Size of the mouth
  let mouthY = y + size * 0.15; // Y position of the mouth
  let mouthX1 = x - mouthSize / 2; // X position of the left end of the mouth
  let mouthX2 = x + mouthSize / 2; // X position of the right end of the mouth
  noFill(); // No fill for the mouth
  stroke(0); // Black color for the mouth outline
  strokeWeight(2); // Set stroke weight for the mouth outline
  arc(x, mouthY, mouthSize, mouthSize * 0.5, 0, PI); // Arc for the smile
}
