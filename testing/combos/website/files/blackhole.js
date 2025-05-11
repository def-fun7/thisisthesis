
let centerX;
let centerY;
let blackHoleRadius = 10; // Initial small size
let maxBlackHoleRadius = 150;
let growthDurationFrames = 120; // 2 seconds at 60 fps
let currentFrame = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
  noStroke();
  clear(); // Initial transparent canvas
}

function draw() {
  clear(); // Keep the canvas transparent

  let growthFactor = 0;
  if (currentFrame < growthDurationFrames) {
    growthFactor = map(currentFrame, 0, growthDurationFrames, 0, 1);
    currentFrame++;
  } else {
    growthFactor = 1; // Stop growing
  }

  let currentRadius = blackHoleRadius + (maxBlackHoleRadius - blackHoleRadius) * growthFactor;

  // Draw the blurry boundary
  let boundaryRadius = currentRadius * 1.5;
  for (let i = boundaryRadius; i > currentRadius; i -= 2) {
    let alpha = map(i, currentRadius, boundaryRadius, 200, 50);
    alpha = constrain(alpha, 50, 200);
    fill(0, alpha);
    ellipse(centerX, centerY, i * 2, i * 2);
  }

  // Draw the black hole core
  fill(0);
  ellipse(centerX, centerY, currentRadius * 2, currentRadius * 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
  maxBlackHoleRadius = min(width, height) / 3;
}