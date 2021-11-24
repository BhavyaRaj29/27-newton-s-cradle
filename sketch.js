
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var Rope1,Rope2,Rope3,Rope4,Rope5;


//function preload(){}	



function setup() {
	createCanvas(800, 800);

rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

	
	var bobDiameter = 60;
	var posX = width/2;
	var posY = height/6 + 200;

	//Create the Bodies Here.

	//for the position of bob.
	bob1 = new Bob(posX - bobDiameter*2, posY, bobDiameter);
	bob2 = new Bob(posX - bobDiameter,posY, bobDiameter);
	bob3 = new Bob(posX,posY,bobDiameter);
	bob4 = new Bob(posX +  bobDiameter, posY, bobDiameter);
	bob5 = new Bob(posX + bobDiameter * 2, posY, bobDiameter);

	roof = new Roof(width/4, height/2, 250, 15);

// for the position of rope.
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bob3.body,roof.body,0,0); 
 	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0); 
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);


	roof = new Roof(220, 410, 300, 20);
	


	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background("yellow");
   

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();
  
  drawSprites();
 
  /*function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); } 
 */

	function mouseDragged() {
		Matter.Body.setPosition(bob1.body,bob2.body,bob3.body,bob4.body,bob5.body, { x: mouseX, y: mouseY });
	  }
	  

}
