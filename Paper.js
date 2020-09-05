class Paper{
constructor(x, y, radius) {
    var options = {
        isStatics:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }

this.body = Bodies.circle(x, y, radius, options);
this.radius = radius;
this.image("https://projectsassets.s3.us-east-2.amazonaws.com/paper.png");
}

display(){
var pos = this.body.position;    
var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
pop();
}

}