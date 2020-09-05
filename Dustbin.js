class Dustbin{
constructor(x, y, width, height) {
    var options = {
        isStatics:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
 this.body = Bodies.rectangle(x, y, width, height);
 this.width = width;
 this.height = height;
 this.image = loadImage("https://projectsassets.s3.us-east-2.amazonaws.com/dustbingreen.png");
}

display() {
var pos = this.body.position;    
var angle = this.body.angle;
 push();
 translate(this.body.position.x, this.body.position.y);
 rotate(angle);
 rectMode(CENTER);
  rect(pos.x, pos.y, this.width, this.height);
  imageMode(CENTER);
  image
pop();
  }
}