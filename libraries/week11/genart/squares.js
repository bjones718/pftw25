let squares = [];
let nSquares = 30;

function setup() {
  createCanvas(800, 600);
  noStroke();
  
  // Initialize squares with random properties
  for (let i = 0; i < nSquares; i++) {
    let s = {
      x: random(width),
      y: random(height),
      baseSize: random(5, 200),
      size: 0,
      color: [random(100, 255), random(100, 255), random(100, 255)],
      phase: random(TWO_PI)     
    };
    squares.push(s);
  }
}

function draw() {
  background(20);

  let t = millis() / 1000; // time in seconds

  for (let s of squares) {
    // Calculate pulsing size using sine wave
    let pulse = sin(t + s.phase) * 2 + 2; // range [0.5, 1.5]
    s.size = s.baseSize * pulse;

    fill(s.color[0], s.color[1], s.color[2], 180);
    rectMode(CENTER);
    rect(s.x, s.y, s.size, s.size);
  }
}
