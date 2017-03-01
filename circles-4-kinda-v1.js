var bubbles = [];

function setup() {
  createCanvas(600, 400);

  for (var i = 0; i < 10; i++) {
    bubbles[i] = {
      x: 50 + i * 100,

      y: height / i,

      r: height / i,

      h: width / i,

      display: function() {
        colorMode(RGB);
        noStroke();
        fill((random(350)), 50, 100, 200, bubbles[i]);

        ellipse(this.x, this.y, this.r, this.h);
      },


      move: function() {

        this.x = this.x + random(-3, 3);


        this.y = this.y + random(-3, 3);
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
