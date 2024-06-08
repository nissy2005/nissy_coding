function setup() {
  createCanvas(800, 400); 
  background(144, 238, 144); // Set the background color to light green
  noLoop();
}

function draw() {
  drawCar(400, 250, 300, 100); // Draw a car at position (400, 250)
}

function drawCar(x, y, carWidth, carHeight) {
  let wheelDiameter = carHeight / 2;
  
  // Car body - main structure
  fill(0, 102, 204); // Blue color for the car body
  beginShape();
  vertex(x - carWidth / 2, y);
  vertex(x + carWidth / 2, y); 
  vertex(x + carWidth / 4, y - carHeight / 3); 
  vertex(x - carWidth / 4, y - carHeight / 3); 
  endShape(CLOSE);

  // Car roof - square top
  fill(0, 102, 204); // Blue color for the car roof
  beginShape();
  vertex(x - carWidth / 4, y - carHeight / 3);  
  vertex(x + carWidth / 4, y - carHeight / 3);
  vertex(x + carWidth / 4, y - carHeight); 
  vertex(x - carWidth / 4, y - carHeight); 
  endShape(CLOSE);
  
  // Windows
  fill(173, 216, 230); // Light blue color for windows
  beginShape();
  vertex(x - carWidth / 4 + 10, y - carHeight / 3); 
  vertex(x + carWidth / 4 - 10, y - carHeight / 3); 
  vertex(x + carWidth / 4 - 10, y - carHeight + 10); 
  vertex(x - carWidth / 4 + 10, y - carHeight + 10);
  endShape(CLOSE);
  
// Text on the window
  fill(0); // Black color for the text
  textSize(20);
  textAlign(CENTER, CENTER); 
  text("BathSpa", x, y - carHeight / 2); 

  // Wheels
  fill(0); // Black color for wheels
  ellipse(x - carWidth / 3, y + carHeight / 4, wheelDiameter, wheelDiameter); // Front wheel
  ellipse(x + carWidth / 3, y + carHeight / 4, wheelDiameter, wheelDiameter); // Rear wheel
  
  // Wheel rims
  fill(255, 215, 0); // Yellow color for rims
  ellipse(x - carWidth / 3, y + carHeight / 4, wheelDiameter / 2, wheelDiameter / 2); // Front rim
  ellipse(x + carWidth / 3, y + carHeight / 4, wheelDiameter / 2, wheelDiameter / 2); // Rear rim

  // Headlights
  fill(255, 255, 0); // Yellow color for headlights
  ellipse(x + carWidth / 2 - 15, y - carHeight / 6, carHeight / 10, carHeight / 10); // Right headlight
  ellipse(x - carWidth / 2 + 15, y - carHeight / 6, carHeight / 10, carHeight / 10); // Left headlight
}
