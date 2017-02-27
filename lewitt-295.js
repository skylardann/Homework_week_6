function setup() {

  createCanvas(600, 600);
  background(0);

}

function draw() {

  noFill();
  stroke(255);
  ellipse(300, 300, 400, 400);

  rectMode(CENTER);

  rect(300, 300, 400, 400);

  line(100, 500, 200, 100);
  line(100, 500, 300, 100);
  line(200, 500, 200, 100);


  line(500, 500, 300, 100);
  line(500, 500, 400, 100);

  line(400, 500, 400, 100);
  line(400, 500, 500, 100);


}
