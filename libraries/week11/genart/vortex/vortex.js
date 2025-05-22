let numLayers = 24;      
let squaresPerLayer = 60; 
let maxRadius;
let time = 0;

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  noStroke();
  colorMode(HSB, 360, 100, 100, 100);
  maxRadius = min(width, height) / 2 - 20;
}

function draw() {
  background(220, 20, 30);  

  translate(width / 2, height / 2); //center
  time += 0.01; //Time

  for (let layer = 0; layer < numLayers; layer++) {
    let layerRadius = map(layer, 0, numLayers, 30, maxRadius);
    let layerSpeed = 0.002 * (layer + 1); // spin speed
    let layerRotation = time * layerSpeed * TWO_PI;

    for (let i = 0; i < squaresPerLayer; i++) {
      let angle = (TWO_PI / squaresPerLayer) * i + layerRotation;
      let x = cos(angle) * layerRadius;
      let y = sin(angle) * layerRadius;

      //pulse sizing
      let baseSize = map(layer, 0, numLayers, 6, 20);
      let pulse = sin(time * 2 + i * 0.2 + layer) * 0.5 + 1;
      let size = baseSize * pulse;

     
      let hue = map(layer, 0, numLayers, 200, 240);
      let brightness = map(pulse, 0.5, 1.5, 60, 100);
      fill(hue, 80, brightness, 90);

      push();
      translate(x, y);
      rotate(angle + time); 
      square(0, 0, size);
      pop();
    }
  }
}
