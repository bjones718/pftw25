//prompt
let mode = window.prompt("Small or Large Circle?").toLowerCase();

function setup() {
  createCanvas(1200, 1200);
  background("white") 
}
//Small Circle
if (mode === "small") {

  function draw() {
    if (mouseIsPressed) {
      fill("green");
    }
    else {
      fill("black");
    }
    {
      ellipse(mouseX, mouseY, 100, 100);
    }
  }
}

if (mode === "large") {
  function draw() {
    if (mouseIsPressed) {
      fill("green");
    }
    else {
      fill("black");
    }
    {
      ellipse(mouseX, mouseY, 150, 150);
    }
  }
}


