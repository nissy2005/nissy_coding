function setup() {
  createCanvas(400, 400); // Create a canvas of 400x400 pixels
}

function draw() {
  background(220); // Set background color to light gray

  // Body
  fill(0, 255, 0); // Green color for the body
  ellipse(200, 200, 150, 150); // Ellipse for the body

  // Head
  fill(0, 150, 0); // Dark green color for the head
  ellipse(200, 100, 100, 100); // Ellipse for the head

  // Eye
  fill(255); // White color for the eye
  ellipse(200, 90, 20, 20); // Single eye
  
  // Pupil
  fill(0); // Black color for the pupil
  ellipse(200, 90, 10, 10); // Single pupil

   // Mouth
  fill(0); // Black color for the mouth
  beginShape();
  vertex(170, 120);
  bezierVertex(170, 140, 230, 140, 230, 120); // Adjust control points to create a jagged mouth
  endShape();
  
    // Horn
  fill(150); // Gray color for the horn
  triangle(180, 60, 200, 20, 220, 60); // Horn
  
      // Feet
  fill(255, 150, 0); // Orange color for the feet
  ellipse(200, 275, 80, 40); // Ellipse for the feet
}
