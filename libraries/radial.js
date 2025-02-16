let rotateBy = 5;
function setup() {
  createCanvas(600, 600);
  background('#ADD8E6');
  angleMode(DEGREES);
}
function makeArm(largeCircle, largeSquare, smallSquare, smallTriangle, mediumCircle, smallCircle, ) {
  let alt = Math.round(rotateBy /360);
  console.log(alt);
  //large circle
  noFill();
  stroke(largeCircle);
  strokeWeight(3);
  ellipse(300, 50+ alt, 300 /alt);
  //large square
  noFill();
  stroke(largeSquare);
  strokeWeight(2);
  square(150, 150 + alt, 100/alt);
  //smallSquare
  noFill();
  stroke(smallSquare);
  strokeWeight(5);
  square(90, 50 + alt, 100/alt);
  //small triangle
  noFill();
  stroke(smallTriangle);
  strokeWeight(1);
  triangle(90 + alt, 45 + alt, 35 + alt, 10 + alt, 45 + alt, 45 + alt);
  //medium Circle
  noFill();
  stroke(mediumCircle);
  strokeWeight(3);
  ellipse(150, 50 + alt, 150 /alt);
  //small circle
  noFill();
  stroke(smallCircle);
  strokeWeight(5);
  ellipse(50, 50 + alt, 50/alt);
}

function draw() {
  translate(300, 300);
  rotate(rotateBy);
  makeArm('pink', 'black', 'purple', 'white', 'blue', 'green');
  rotateBy += 10;
}
function mousePressed() {
  noLoop();
}