
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var body1, body2, body3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 ball = new Paper(200, 200, 20);
	 body1 = new Dustbin(350, 640, 150, 20);
	 body2 = new Dustbin(265, 570, 20, 70);
	 body3 = new Dustbin(435, 570, 20, 70);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
  ball.display();
  body1.display();
  body2.display();
  body3.display();

  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW ) {

   Matter.body.applyForce(this.body, this.body.position, {x:85, y:-85});

  }
}