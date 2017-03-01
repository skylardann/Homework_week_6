var sizes = [150, 60, 90, 80, 90, 100, 60, 70, 50, 30];

function setup() {

  createCanvas(1000, 1000);
  background(0);

  noStroke();
  frameRate(2);

}

function draw() {


  for (var i = 0; i < sizes.length; i += 1) {
  colorMode(HSB);

    fill((random(0,200,11,121)),22,221,121, sizes[i]);

    ellipse(mouseX + i * 100, height / 2, sizes[i], sizes[i]);

  }
}
