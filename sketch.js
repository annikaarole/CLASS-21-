
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var btn1;
var btn2;


function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	btn1=createImg('right.png');
	btn1.position(220,30);
	btn1.size(50,50);
	btn1.mouseClicked(hForce);

	btn2=createImg('up.jpg');
	btn2.position(220,150);
	btn2.size(50,50);
	btn2.mouseClicked(vForce);

	ground = new Ground(200,390,400,20);
	right = new Ground(300,200,20,400);
	left = new Ground(10,200,20,400);
	top_wall = new Ground(200,10,400,20);

	rectMode(CENTER);
  	ellipseMode(RADIUS);

	//Create the Bodies Here.
	var ball_options={
		//isStatic:false,
		restitution:0.5,
		//friction:0,
		//density:1.2
	}
	
	
	ball=Matter.Bodies.circle(50, 50, 50, ball_options);
	balla=Matter.Bodies.circle(100,100,25,ball_options);

	ltwall=Matter.Bodies.rectangle(200,200,50,50);

	World.add(world,ball);
	World.add(world,balla);

	Engine.run(engine);
  
}


function draw() {
  

  background(51);
  
  ellipse(ball.position.x,ball.position.y,100); //radius = 50
  ellipse(balla.position.x,balla.position.y,50);

  ground.show();
  top_wall.show();
  left.show();
  right.show();

  Engine.update(engine);

 // drawSprites();
 
 	rectMode(CENTER);
  	ellipseMode(RADIUS);
}

function hForce()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}

function vForce()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	
}
