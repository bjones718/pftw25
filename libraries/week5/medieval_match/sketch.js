let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
  totalPairs: 6,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false
};

let cardfaceArray = [];
let cardBack;
function preload() {
  bg = loadImage('images/castlebackground.png');
  cardBack = loadImage('images/cardback.png');
  cardfaceArray = [
    loadImage('images/Dragon.png'),
    loadImage('images/Henchman.png'),
    loadImage('images/King.png'),
    loadImage('images/Peasant.png'),
    loadImage('images/Princess.png'),
    loadImage('images/Wizard.png')
  ]
}

function setup() {
  createCanvas(800, 600);
 
  let selectedFaces = [];
  for (let z = 0; z < 6; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    //remove the used cardface so it doesn't get randomly selected again
    cardfaceArray.splice(randomIdx, 1);
  }
  selectedFaces = shuffleArray(selectedFaces);
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 4; i++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 150;  
    }
    startingY += 150;
    startingX = 100;
  }
}

function draw() {
  background(bg);
  if (gameState.numMatched === gameState.totalPairs) {
    fill('magenta');
    textSize(66);
    text('you won!', 100, 75);
    noLoop();
  }
  for (let k = 0; k < cards.length; k++) {
    if(!cards[k].isMatch) {
      cards [k].face = DOWN;
    }
    cards[k].show();
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill(255);
  textSize(30);
  text('Attempts: ' + gameState.attempts, 500, 550);
  text('Matches ' + gameState.numMatched, 500, 590)
}

function mousePressed() {
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards length, 
    // then we can trigger the flip
    if(gameState.flippedCards.length < 2 && 
    cards[k].didHit(mouseX, mouseY)) {
      console.log('flipped', cards[k]);
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
    gameState.attempts++;
    if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
     
      gameState.flippedCards[0].isMatch = true;
      gameState.flippedCards[1].isMatch = true;
     
      gameState.flippedCards.length = 0;
     
      gameState.numMatched++;
      loop()
    } else {
      gameState.waiting = true;
        const loopTimeout = window.setTimeout(() => {
          loop();
          window.clearTimeout(loopTimeout);
        }, 1000)

    }
  }
}

class Card {
  constructor (x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 100;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  show () {
    if (this.face === UP || this.isMatch) {
      fill('gold');
      rect(this.x, this.y, this.width, this.height, 10);
      image(this.cardFaceImg, this.x, this.y, this.width, this.height);
    } else {
      fill('gray');
      rect(this.x, this.y, this.width, this.height, 10);
      image(cardBack, this.x, this.y, this.width, this.height);
    }
  }
  
  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width &&
       mouseY >= this.y && mouseY <= this.y + this.height) {
      this.flip();
      return true;
    } else {
      return false;
    }
  }
  
  flip () {
    if (this.face === DOWN) {
      this.face = UP;
    }
    else {
      this.face = DOWN;
    }
    this.show();
  }
}
function shuffleArray (array) {
  let counter = array.length;
  while (counter > 0) {
    //Pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    //swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
  return array;
}