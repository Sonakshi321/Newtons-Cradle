
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var band1;
var band2;
var band3;
var band4;
var band5;
var roof1;
function preload()
{
	
}

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1= new Bob(20,40,50,50);
bob2= new Bob(220,40,50,50);
bob3= new Bob(420,40,50,50);
bob4= new Bob(620,40,50,50);
bob5= new Bob(820,40,50,50);

band1= new Rope(bob1.body,roof1.body,-bobDiameter*2,0);
band2= new Rope(bob2.body,roof1.body,-bobDiameter*2,0);
band3= new Rope(bob3.body,roof1.body,-bobDiameter*2,0);
band4= new Rope(bob4.body,roof1.body,-bobDiameter*2,0);
band5= new Rope(bob5.body,roof1.body,-bobDiameter*2,0);

roof1= new roof1(20,1600,20,800);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  band1.display();
  band2.display();
  band3.display();
  band4.display();
  band5.display();
  roof1.display();
  drawSprites();
 
}



