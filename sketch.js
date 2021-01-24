
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var dustbin;
var rightside , leftSide, bottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,350,800,15);
	ball = new Paper(370,250,30);
	//rightside = new Dustbin(680,300,20,100);
	//leftside = new Dustbin(480,300,20,100);
	bottom = new Dustbin(580,250,250,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);40
  background(0);
  
  ground.show(); 
  ball.display();
  //rightside.display();
  //leftside.display();
  bottom.display();
  

  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

        Matter.Body.applyForce(ball.object, ball.object.position,{x:70 , y:-70})

	}

}





