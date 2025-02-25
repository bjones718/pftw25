

let myRect = []
let startingX = 150;
let startingY = 150;

function setup () {
    createCanvas(1000, 600);
    background('purple');
    for (let k = 0; k < 2; k++){
    for (let i = 0; i < 5; i++){
        fill ('#f1ABFC');
        rect(startingX, startingY, 100, 150);
       
        startingX += 150;
    } 
    startingY += 200;
    startingX = 150;
}

}
 
