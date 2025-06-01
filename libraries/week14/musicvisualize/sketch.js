let volumeUpButton, volumeDownButton, stopButton, uploadButton;
let uploadedTrack;
let fft, amplitude;
let beatCounter = 0;
let currentTrack = null;
let spectrumCircles = [];
let vortexRings = [];
let lastRemovalTime = 0;
let headerImg;

function preload() {
  tracks = [];
  images = [];
  trackButtons = [];

  tracks[0] = loadSound('sound/Grown Up Calls.mp3');
  tracks[1] = loadSound('sound/I Know You.mp3');
  tracks[2] = loadSound('sound/Maestranza.mp3');

  images[0] = loadImage('images/fayeweb.png');
  images[1] = loadImage('images/fleet.png');
  images[2] = loadImage('images/tym.png');

  headerImg = loadImage('images/header.png');
}

function setup() {
  const canvas = createCanvas(1000, 800);
  
  
  fft = new p5.FFT();
  amplitude = new p5.Amplitude();
  createButtons();
  resetVisualizer();
}

function draw() {
  background(0);
  //fft
  if (currentTrack && currentTrack.isPlaying()) {
    const level = amplitude.getLevel();
    const spectrum = fft.analyze();
    const bass = fft.getEnergy('bass');

    if (bass > 200) {
      beatCounter++;
      if (beatCounter % 20 === 0) spectrumCircles.push(createSpectrumCircle());
      if (beatCounter % 5 === 0) vortexRings.push(createVortexRing());
    }

    if (millis() - lastRemovalTime > 10000 && spectrumCircles.length > 0) {
      spectrumCircles.shift();
      vortexRings.shift();
      lastRemovalTime = millis();
    }

    for (const circle of spectrumCircles) circle.display(spectrum);
    for (const ring of vortexRings) ring.display(level);
  }
}

function createButtons() {
  const yPos = 0;
  const canvasX = (windowWidth - width) / 2;
  const canvasY = (windowHeight - height) / 2;
  const buttonX = canvasX + (width / 2) - (3 * 150 / 2);

  const imgFiles = ['images/fayeweb.png', 'images/fleet.png', 'images/tym.png'];
  for (let i = 0; i < 3; i++) {
    const btn = createButton('Track ' + (i + 1));
    btn.position(buttonX + i * 150, canvasY + yPos + 100);
    btn.mousePressed(() => playTrack(i));
    trackButtons.push(btn);
    
    const fileIndex = i === 0 ? 2 : (i === 1 ? 0 : 1);
    const img = createImg(imgFiles[fileIndex], 'Artist');
    img.position(buttonX + i * 150, canvasY + yPos + 130);
    img.size(100, 100);
  }
  //button creation
  //upload, volumes and stop
  uploadButton = createFileInput(handleUpload);
  uploadButton.position(canvasX + (width / 2) - 150, canvasY + yPos + 240);
  

  //vulume +
  volumeUpButton = createButton('+');
  volumeUpButton.position(canvasX + (width / 2) - 50, canvasY + yPos + 240);
  volumeUpButton.mousePressed(() => changeVolume(0.1));
  //volume -
  volumeDownButton = createButton('-');
  volumeDownButton.position(canvasX + (width / 2) - 10, canvasY + yPos + 240);
  volumeDownButton.mousePressed(() => changeVolume(-0.1));
  //stop
  stopButton = createButton('Stop');
  stopButton.position(canvasX + (width / 2) + 30, canvasY + yPos + 240);
  stopButton.mousePressed(stopTrack);
}
//play, stop, start
function playTrack(index) {
  stopTrack();
  currentTrack = tracks[index];
  currentTrack.play();
  currentTrack.setVolume(0.5);
  resetVisualizer();
}
function stopTrack() {
  if (currentTrack && currentTrack.isPlaying()) currentTrack.stop();
  currentTrack = null;
  resetVisualizer();
}
function changeVolume(amount) {
  if (currentTrack) {
    const vol = constrain(currentTrack.getVolume() + amount, 0, 1);
    currentTrack.setVolume(vol);
  }
}
// upload mp3
function handleUpload(file) {
  if (file.type === 'audio') {
    if (uploadedTrack) uploadedTrack.stop();
    uploadedTrack = loadSound(file.data, () => {
      stopTrack();
      currentTrack = uploadedTrack;
      currentTrack.play();
      currentTrack.setVolume(0.5);
      resetVisualizer();
    });
  }
}

function resetVisualizer() {
  spectrumCircles = [];
  vortexRings = [];
  beatCounter = 0;
  lastRemovalTime = millis();
}
//spectrum circle
function createSpectrumCircle() {
  const radius = random(80, 150);
  const col = color(random(255), random(255), random(255));
  let angleOffset = 0;
  return {
    display(spectrum) {
      push();
      translate(width / 2, height / 2 + 110);
      noFill();
      stroke(col);
      strokeWeight(5);
      beginShape();
      for (let i = 0; i < 360; i += 5) {
        const index = floor(map(i, 0, 360, 0, spectrum.length));
        const amp = spectrum[index];
        const r = radius + amp * 0.6;
        const x = r * cos(radians(i + angleOffset));
        const y = r * sin(radians(i + angleOffset));
        vertex(x, y);
      }
      endShape(CLOSE);
      pop();
      angleOffset += 1;
    },
    getRadius: () => radius
  };
}
//vortex rings
function createVortexRing() {
  const count = 3;
  const rings = [];
  for (let i = 0; i < count; i++) {
    const size = random(30, 50);
    const col = color(random(255), random(255), random(255));
    rings.push({ angle: 0, size, col });
  }
  let angleOffset = 0;
  return {
    display(level) {
      push();
      translate(width / 2, height / 2 + 110);
      const maxRadius = spectrumCircles.length > 0 ? Math.max(...spectrumCircles.map(c => c.getRadius())) * 0.8 : 150;
      for (let i = 0; i < rings.length; i++) {
        const ring = rings[i];
        fill(ring.col);
        noStroke();
        const angle = angleOffset + i * TWO_PI / rings.length;
        const x = (ring.size + level * 100) * cos(angle);
        const y = (ring.size + level * 100) * sin(angle);
        const limitedSize = min(ring.size + level * 100, maxRadius);
        ellipse(x, y, limitedSize, limitedSize);
      }
      pop();
      angleOffset += 0.5;
    }
  };
}
