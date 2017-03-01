var sizes = [40, 70, 90, 30, 60, 100, 60, 70, 50, 30];

function setup() {

  createCanvas(1000, 1000);
  noStroke();
  background(0);

  for (var i = 0; i < sizes.length; i += 1) {
    colorMode(HSB);
    fill((random(350)), 50, 100, 200, sizes[i]);
    ellipse(50 + i * 100, height / 2, sizes[i], sizes[i]);
  }


  function draw() {

    ellipse(50 + i * 100, height / 2, sizes[i], sizes[i]);

  }
}
