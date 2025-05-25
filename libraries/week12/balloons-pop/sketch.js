 let balloons = [];
let popSound = [];

function preload() {
  // sounds
  popSound[0] = loadSound('Sounds/balloonpop1.mp3');
  popSound[1] = loadSound('Sounds/balloonpop2.mp3');
  popSound[2] = loadSound('Sounds/balloonpop3.mp3');
}

function setup() {
  createCanvas(600, 400);

  // balloons
  balloons.push(new Balloon(150, 200, color(255, 0, 0), 0));  // Red
  balloons.push(new Balloon(300, 200, color(0, 255, 0), 1));  // Green
  balloons.push(new Balloon(450, 200, color(0, 0, 255), 2));  // Blue
}


function draw() {
  background(220);
  for (let b of balloons) {
    b.display();
  }
}
// mouse clicked
function mousePressed() {
  for (let b of balloons) {
    if (b.isClicked(mouseX, mouseY)) {
      popSound[b.soundIndex].play();
    }
  }
}

class Balloon {
  constructor(x, y, col, soundIndex) {
    this.x = x;
    this.y = y;
    this.r = 50;
    this.colo = col;
    this.soundIndex = soundIndex;
  }

  display() {
    fill(this.colo);
    stroke(0);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  isClicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < this.r;
  }
}
