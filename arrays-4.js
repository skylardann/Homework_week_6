var shade = [10, 20, 45, 25, 60,100,200,150,50];


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  colorMode(HSB);
  noStroke();

  for (var i = 0; i < shade.length; i += 1) {

    fill(shade[i], 100, 100);
    rect(0 + i * width / 9, 0, width / 9, height);

  }
}
 
