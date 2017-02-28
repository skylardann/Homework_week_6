function setup() {

  createCanvas(405, 405);
  background(206, 207, 209, 33);


  frameRate(5);

  for (var z = 0; z <= 400; z += 10) {
    stroke(180, 171, 173);

    line(0, z, 400, z)
    stroke(180, 171, 173);

    line(z, 0, z, 400)

  }
}
var b = 10;

function draw() {
  
  

  strokeWeight(0.25);

  stroke(140, 171, 173);

  if (b <= 200) {

    line(b, 0, 0, b);
    stroke(140, 171, 173);
    line(200, b, b, 200);
    stroke(140, 171, 173);
    line(200, 200 - b, 200 + b, 200);
    stroke(140, 171, 173);
    line(200 + b, 0, 400, 200 - b);
    line(200, 200 + b, 200 - b, 200);
    line(200 - b, 400, 0, 200 + b);
    line(200, 200 + b, 200 + b, 200);
    line(200 + b, 400, 400, 200 + b);
    b += 10;
  }
  
}


