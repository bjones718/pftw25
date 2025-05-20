
       function setup() {
       createCanvas(windowWidth, windowHeight);
       rectMode(CENTER);
       noStroke();
       colorMode(HSB, 360, 100, 100, 100);
     }

     function draw() {
       background(0);

       const gcol = 20;
       const rows = 20;
       let spacingX = width / gcol;
       let spacingY = height / rows;
       let time = frameCount * 0.02;

       for (let i = 0; i < gcol; i++) {
         for (let j = 0; j < rows; j++) {
           let x = i * spacingX + spacingX;
           let y = j * spacingY + spacingY;

           let wave = sin(time + i * 0.5 + j * 0.5);
           let size = map(wave, -1, 1, 10, 50);

           let hue = (i * 36 + j * 12 + frameCount) % 360;
           fill(hue, 80, 100, 90);

           if ((i + j) % 2 === 0) {
             ellipse(x, y, size);
           } else {
             rect(x, y, size, size);
           }
         }
       }
     }

     function windowResized() {
       resizeCanvas(windowWidth, windowHeight);
     }
   