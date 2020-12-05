
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1; 
var ground1;
var dustbin;
var body1,body2,body3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper1= new Paper(400,50 ,70);
	 
	 ground1 = new Ground(600,400,1200,80);

	 dustbin=new Dustbin(100,200,20,20);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper1.display();
  ground1.display();
 dustbin.display();
 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW)
{
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:3});
}}


