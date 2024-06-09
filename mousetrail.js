let flowers = [];
let hueValue = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100); // 
  noStroke();
}

function draw() {
  background(hueValue, 100, 100); // rainbow background
  
  // Update and display all flowers
  for (let flower of flowers) {
    flower.update();
    flower.display();
  }
  
  hueValue = (hueValue + 0.5) % 360; // Increment hueValue and loop it
}

function mouseMoved() {
  // Create a new flower at mouse position
  flowers.push(new Flower(mouseX, mouseY));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.petals = 5; 
    this.size = 0;
    this.maxSize = random(100, 110);
    this.growthRate = random(1, 3);
    this.hue = random(360); // 
    this.alpha = 255; // 
  }
  
  update() {
    this.size += this.growthRate; // 
    this.alpha -= 1; // 
    if (this.alpha < 0) {
      this.alpha = 0; // 
    }
    if (this.size > this.maxSize) {
      this.size = this.maxSize; // 
    }
  }
  
  display() {
    fill(this.hue, 80, 100, this.alpha); //
    for (let i = 0; i < this.petals; i++) {
      let angle = TWO_PI / this.petals * i;
      let xOff = cos(angle) * this.size / 2;
      let yOff = sin(angle) * this.size / 2;
      ellipse(this.x + xOff, this.y + yOff, this.size / 2, this.size / 2);
    }
  }
}
