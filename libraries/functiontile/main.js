function setup() {
  createCanvas(200, 200);
}
function createTile() {
  translate(0, 0);
  fill(216, 192, 38);
    rect(0, 0, 200, 200);
    stroke(0);
    strokeWeight(5);
    line(0, 100, 200, 100);
    line(100, 200, 100, 0);
    //circles in square
    noStroke();
    fill(124, 145, 151);
    circle(50, 50, 80);
    circle(150, 50, 80);
    circle(50, 150, 80);
    circle(150, 150, 80);
   //center circle
    fill(255);
    stroke(0);
    strokeWeight(10);
    circle(100, 100, 50);
    noStroke(); 
   //ellipse in circle
   fill(38, 198, 238);
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
  createTile();
  noLoop();

}
