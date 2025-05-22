let colors;
let rows = 60;
let col;
let t = 0;

function setup() {
  createCanvas(800, 600);
  noStroke();
  colors = [
    color('blue'),
    color('hotpink'),
    color('#89CFF0'), 
    color('#FF1493'), 
    color('white'),
    color('aqua')
  ];
  col= floor(width / 10); // number of columns
}

function draw() {
  background(20);
  let rowHeight = height / rows;
  let cWidth = width / col;

  for (let r = 0; r < rows; r++) {
    // ocillation wave
    let yOffset = sin(t + r * 0.2) * 10;

    for (let c = 0; c < col; c++) {
      let cx = c * cWidth + cWidth / 2;
      let cy = r * rowHeight + rowHeight / 2 + yOffset;

      // wave
      let sizeMod = sin(t + r * 0.15 + c * 0.1) * 0.5 + 1.2;
      let baseSize = min(cWidth, rowHeight) * 0.6 * sizeMod;

      fill(colors[(r + c) % colors.length]);
      drawTriangle(cx, cy, baseSize);
    }
  }

  t += 0.01;  
}

function drawTriangle(x, y, s) {
  push();
  translate(x, y);
  triangle(
    0, -s / 2,
    -s / 2, s / 2,
    s / 2, s / 2
  );
  pop();
}
