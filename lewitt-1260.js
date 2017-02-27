var x = 160
var y = 160

function setup() {

  createCanvas(700, 700);
  background(233, 230, 221);
  stroke(12);
  fill(222,22,22,220);


  while (x < 200 && y < 200) {

    noFill(221, 250);

    strokeWeight(100);
    stroke(0);
    rectMode(RADIUS);

    rect(350, 350, 250, 320, 80);

    x = x + 60


  }

}

function draw() {
  strokeWeight(100);

  fill(0);

  line(100, 0, 100, 700);
  
  line(600, 0, 600, 700);
  

}
