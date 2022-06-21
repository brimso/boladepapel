
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density: 1.2
	}
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,15,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20); 
	leftSide = new Ground(1100,600,20,120);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();	
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0.1})
	}
}