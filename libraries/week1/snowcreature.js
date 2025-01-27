let grid = undefined;
let stroke1 = prompt("enter a basic color name in lowercase", "gray");
let stroke2 = prompt("enter another basic color in lowercase", "purple");

function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    snow = loadImage("images/snowscene.png");
    ufo = loadImage("images/ufo.png")
    alien = loadImage("images/alienface.png")

}
function draw() {
    background(snow)
    // snowman legs
    fill("#f1f1f1");
    strokeWeight(20);
    stroke(stroke1);
    // left leg
    ellipse(350, 650, 200);
    // right leg
    ellipse(650, 650, 200);
        // body
    ellipse(500, 450, 350, 400);  
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400,120, 600, 120);
    // hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(25);
    point(450, 200);
    point(550, 200);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 250, 80, 80, 0, HALF_PI);

    // alien
    image(alien, 350, 300, 300);

    // friend --lower body
    fill("#f1f1f1");
    strokeWeight(10);
    stroke(24, 56, 171);
    ellipse(150, 600, 150, 200);
    // head
    strokeWeight(10);
    stroke(24, 56, 171);
    ellipse(150, 455, 125);
    // eyes
    stroke(0);
    strokeWeight(10);
    point(125, 450);
    point(175, 450);
    // mouth
    noFill();
    strokeWeight(10);
    arc(150, 475, 40, 40, 0, HALF_PI);
    // hat brim
    (stroke2);
    strokeWeight(20);
    line(100, 400, 200, 400);
    // hat body
   fill("black");
   rect(125, 350, 50, 50);

    //ufo friend
    image(ufo, 700, 150, 300);
    

   










}