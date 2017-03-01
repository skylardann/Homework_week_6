var bubbles = [];
var sizes = [40, 70, 90, 30, 60, 100, 60, 70, 50, 30];

function setup() {
  createCanvas(600, 400);

  for (var i = 0; i < 10; i++) {
    bubbles[i] = {
      x: 50 + i * 100,

      y: height / 2,

      r: sizes[i],

      h: sizes[i],

      display: function() {
        colorMode(RGB);
        noStroke();
        fill((random(350)), 50, 100, 200, bubbles[i]);

        ellipse(this.x, this.y, this.r, this.h);
      },


      move: function() {

        this.x = this.x + random(-1, 1);


        this.y = this.y + random(-1, 1);
      }
    }
  }

}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {

    ellipse(50 + i * 100, height / 2, bubbles[i], bubbles[i]);

    bubbles[i].move();
    bubbles[i].display();
  }
}
