function setup() {

  createCanvas(575, 575);
  background(241, 236, 232);

}

function draw() {

  strokeWeight(1);
  stroke(176, 74, 62);
  line(0, 280, 450, 280);

}

function mousePressed() {

  for (var posX = 0; posX <= 100; posX += 10) {



    line(0, 280, mouseY, mouseX);

  }
}
