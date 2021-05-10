
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bob1 = new Bob(100,470,20);
	bob2 = new Bob(300,470,20);
	bob3 = new Bob(500,470,20);
	bob4 = new Bob(700,470,20);
	bob5 = new Bob(900,470,20);
	rope1=new rope(bob1.body,roofobject.body,-bobDiameter*2,0);
	rope2=new rope(bob2.body,roofobject.body,-bobDiameter*2,0);
	rope3=new rope(bob3.body,roofobject.body,-bobDiameter*2,0);
	rope4=new rope(bob4.body,roofobject.body,-bobDiameter*2,0);
	rope5=new rope(bob5.body,roofobject.body,-bobDiameter*2,0);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


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
  drawSprites();
 
}



