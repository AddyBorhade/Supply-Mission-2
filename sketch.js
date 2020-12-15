





var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

	box1 = new Box(205,600,20,100);
	box2 = new Box(500,600,20,100);
	box3 = new Box(355,630,300,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
  box1.display();
  box1.color = "red"
  box2.display();
  box2.color = "red"
  box3.display()
  box3.color = "red"
//   Matter.Body.setStatic(box1.body,true);
//   Matter.Body.setStatic(box1.body,true);
//   Matter.Body.setStatic(box1.body,true);
  move();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
  }
}

function move() {
	if(packageBody.isStatic === true){
if(keyCode === RIGHT_ARROW){
	Matter.Body.translate(packageBody, {x: 10, y: 0})
	helicopterSprite.x = helicopterSprite.x + 10;

}
if(keyCode === LEFT_ARROW){
	Matter.Body.translate(packageBody, {x: -10, y: 0})
	helicopterSprite.x = helicopterSprite.x - 10;

}





}
}



