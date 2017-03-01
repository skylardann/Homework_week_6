var sizes = [40, 70, 90, 30, 60, 33, 60, 20, 10, 22];

function setup() {

  createCanvas(1000, 1000);

  noStroke();

  background(0);

  for (var i = 0; i < sizes.length; i += 1) {
    
    
    colorMode(HSB);

    fill((random(350)), 11, 150, 200, sizes[i]);

    ellipse(50 + i * 100, height / 2, sizes[i], sizes[i]);
  }
}
