function setup() {
  createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, circleStrokeColor, circleInSquareColor, centerCircleColor, ellipseInCircleColor) {
  translate(originX, originY);
  fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(5);
    line(0, 100, 200, 100);
    line(100, 200, 100, 0);
    //circles in square
    noStroke();
    fill(circleInSquareColor);
    circle(50, 50, 80);
    circle(150, 50, 80);
    circle(50, 150, 80);
    circle(150, 150, 80);
   //center circle
    fill(centerCircleColor);
    stroke(circleStrokeColor);
    strokeWeight(10);
    circle(100, 100, 50);
    noStroke(); 
   //ellipse in circle
   fill(ellipseInCircleColor);
    ellipse(50, 50, 70, 30);
   ellipse(50, 50, 30, 70);
   ellipse(150, 50, 30, 70);
   ellipse(150, 50, 70, 30);
   ellipse(50, 150, 70, 30);
   ellipse(50, 150, 30, 70);
   ellipse(150, 150, 30, 70);
   ellipse(150, 150, 70, 30);
     
    


  
}

function draw() {
  createTile(0, 0, 'gold', 'black', 'black','gray', 'white', 'DodgerBlue');
  createTile(0, 200, 'DodgerBlue', 'black', 'gold', 'white', 'black','gold');
  createTile(0, 200, 'white', 'black', 'DodgerBlue', 'gold', 'gold', 'black');
  createTile(200, -400, '#daa520', 'black', '#daa520','black', 'midnight blue', '#d3d3d3');
  createTile(0, 200, '#0000cd', 'black', 'black', 'turquoise', 'cyan', 'white');
  createTile(0, 200, '#f5f5f5', 'black', '#0000cd', '#0000cd', '#daa520', '#daa520');
  createTile(200, -400, '#B8860B', 'black', 'turquoise', '#daa520', 'DodgerBlue', '#0000cd');
  createTile(0, 200, '#00008b', 'black', '#daa520', 'black', 'white', 'DodgerBlue');
  createTile(0, 200, '#ffffff', 'black', '#daa520', 'DodgerBlue', 'black', '#daa520', 'white', 'DodgerBlue'); 
  noLoop();
}
