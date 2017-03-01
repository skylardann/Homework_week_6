var shade = [10, 20, 45, 25, 60];


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  colorMode(HSB);
  noStroke();

  for (var i = 0; i < 5; i += 1) {

    fill(shade[i], 100, 100);
    rect(0 + i * width / 9, 0, width / 9, height);

  }
}
