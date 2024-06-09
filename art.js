function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("rgb(52,8,19)"); // Reddish brown background resembling the sunset
  noStroke();
  
// Adjusting loop parameters to cover the entire canvas.
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
// Getting the distance from the circle to the mouse;
      let distance = dist(mouseX, mouseY, x, y);
      // Mapping the distance to a range that looks better;
      let diameter = map(distance, 0, max(width, height), 10, 50);
      
// the color is made based on circle position creates a gradient effect across the canvas.

      let r = map(x, 0, width, 255, 200); 
      let g = map(y, 0, height, 100, 0);  
      let b = map(y, 0, height, 0, 100);  
      fill(r, g, b);
      
      circle(x, y, diameter);
    }
  }
  
// Adding text with stroke 
  fill(255); // White color for text
  textSize(70); // Increase the text size
  textStyle(ITALIC);
  textAlign(CENTER, CENTER);
  stroke(0); // Black color for outline
  strokeWeight(7); // Adjust the outline thickness as needed
  
  text("Welcome to", width/2, height/2 - 50); // Adjust y position for the first line, creating a gap
  text("Bath Spa University", width/2, height/2 + 50); // Adjust y position for the second line, creating a gap
}
