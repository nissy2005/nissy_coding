// Game variables
let cigarette;
let hearts = [];
let bullets = [];
let score = 0;
let lives = 3;
let gameOver = false;

// Game settings
let heartInterval = 60; // Interval for spawning hearts (frames)
let heartSpeed = 2; // Speed of falling hearts
let bulletSpeed = 5; // Speed of bullets

function setup() {
  createCanvas(400, 400);
  cigarette = new Cigarette();
}

function draw() {
  background(220);
  
  // Draw cigarette
  cigarette.update();
  cigarette.show();
  
  // Draw hearts
  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].update();
    hearts[i].show();
    if (hearts[i].hits(cigarette)) {
      hearts.splice(i, 1);
      score++;
    } else if (hearts[i].reachedBottom()) {
      hearts.splice(i, 1);
      loseLife();
    }
  }
  
  // Draw bullets
  for (let i = bullets.length - 1; i >= 0; i--) {
    bullets[i].update();
    bullets[i].show();
    if (bullets[i].offscreen()) {
      bullets.splice(i, 1);
    } else {
      // Check for bullet-heart collisions
      for (let j = hearts.length - 1; j >= 0; j--) {
        if (bullets[i].hits(hearts[j])) {
          bullets.splice(i, 1);
          hearts.splice(j, 1);
          score++;
          break;
        }
      }
    }
  }
  
  // Display score and lives
  textAlign(LEFT);
  fill(0);
  textSize(20);
  text(`Score: ${score}`, 10, 30);
  text(`Lives: ${lives}`, 10, 60);
  
  // Game over condition
  if (gameOver) {
    textAlign(CENTER);
    textSize(32);
    text("Game Over", width / 2, height / 2);
    textSize(16);
    text("Press SPACE to restart", width / 2, height / 2 + 30);
  }
  
  // Spawn hearts
  if (frameCount % heartInterval === 0 && !gameOver) {
    hearts.push(new Heart());
  }
}

function keyPressed() {
  if (keyCode === 32 && gameOver) {
    resetGame();
  }
}

function mousePressed() {
  if (!gameOver) {
    let bullet = new Bullet(cigarette.x + cigarette.width / 2, cigarette.y - cigarette.height / 2);
    bullets.push(bullet);
  }
}

function loseLife() {
  lives--;
  if (lives <= 0) {
    gameOver = true;
  }
}

function resetGame() {
  cigarette = new Cigarette();
  hearts = [];
  bullets = [];
  score = 0;
  lives = 3;
  gameOver = false;
}

class Cigarette {
  constructor() {
    this.x = width / 2;
    this.y = height - 40; // Adjusted position to prevent it from being too close to the edge
    this.width = 10; // Width of the cigarette
    this.height = 40; // Height of the cigarette
    this.color = color(155, 118, 83); // Color of the cigarette (brownish)
  }
  
  update() {
    this.x = mouseX;
    this.x = constrain(this.x, 0, width - this.width);
  }
  
  show() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}

class Heart {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 50; // Size of the heart
    this.speed = heartSpeed;
  }
  
  update() {
    this.y += this.speed;
  }
  
  show() {
    fill(255, 0, 0);
    noStroke();
    // Top part of the heart
    ellipse(this.x - this.size / 4, this.y, this.size / 2, this.size / 2);
    ellipse(this.x + this.size / 4, this.y, this.size / 2, this.size / 2);
    // Bottom part of the heart
    triangle(this.x - this.size / 2, this.y + this.size / 4, 
             this.x + this.size / 2, this.y + this.size / 4, 
             this.x, this.y + this.size);
  }
  
  hits(cigarette) {
    return this.y + this.size >= cigarette.y &&
           this.x >= cigarette.x - this.size / 2 &&
           this.x <= cigarette.x + cigarette.width + this.size / 2;
  }
  
  reachedBottom() {
    return this.y >= height;
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 4;
    this.speed = bulletSpeed;
  }
  
  update() {
    this.y -= this.speed;
  }
  
  show() {
    fill(0);
    ellipse(this.x, this.y, this.radius * 2);
  }
  
  offscreen() {
    return this.y < 0;
  }
  
  hits(heart) {
    let d = dist(this.x, this.y, heart.x, heart.y + heart.size / 2);
    return d < this.radius + heart.size / 2;
  }
}
