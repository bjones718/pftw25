let houseImg;
let isRaining = false;
let raindrops = [];
let rainButton, stopButton;
function preload() {
  houseImg = loadImage('house.png'); 
}

function setup() {
  createCanvas (800, 600);

  // Make it rain button
  rainButton = createButton("Make it Rain");
  rainButton.position(10, 10);
  rainButton.mousePressed(() => {
    isRaining = true; // true
  });

  // Stop Raining button
  stopRaining = createButton("Stop Raining");
  stopRaining.position(120, 10);
  stopRaining.mousePressed(() => {
    isRaining = false;  // false
  });

  // rain
  for (let i = 0; i < 300; i++) {
    raindrops.push(new Raindrops());
  }
}

function draw() {
  background(200);
  image(houseImg, width / 2 - houseImg.width / 2, height - houseImg.height);

  
  if (isRaining) {
    for (let drop of raindrops) {
      drop.fall();
      drop.show();
      }
  }
}

class Raindrops {
  constructor() {
    this.x = random(width);
    this.y = random(-500, 0);
    this.len = random(10, 20);
    this.speed = random(4, 10);
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.x = random(width);
    }
  }

  show() {
    stroke(50, 100, 255);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}
