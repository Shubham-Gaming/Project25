var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3,ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	box1IMG=loadImage("dustbingreen.png")
	//=loadImage("package.png")
	ballIMG=loadImage("paper.png")
	
}

function setup() {
	createCanvas(1600, 300);
	engine = Engine.create()
	world = engine.world
	var option={
		isStatic:false,
		restitution:0.8,
		friction:1.0,
		density:1.0
	}
	box1=Bodies.rectangle(width/2,height-30,200,20,{isStatic:true})
	box2=Bodies.rectangle(width/2-80,height-80,20,5,{isStatic:true})
	box3=Bodies.rectangle(width/2+80,height-80,20,5,{isStatic:true})

	
	//fill("red")
	
	World.add(world,box1)
	World.add(world,box2)
	World.add(world,box3)


	ball=Bodies.circle(100,250,33,option)


	World.add(world,ball)



	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 290, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)

  background(0);
  noStroke();
  fill("#008D00")

  imageMode(CENTER)
  rectMode(CENTER)
  rect(box1.position.x,box1.position.y,185,20)
  image(box1IMG,box1.position.x,box1.position.y-50,200,300)
  rect(box2.position.x,box2.position.y,5,60)
  rect(box3.position.x,box3.position.y,5,60)
  fill("#B0DFE5")
  rect(ground.position.x,ground.position.y,width,30)
  fill("#EAD5DC")
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 35, 35);
  
  image(ballIMG,ball.position.x,ball.position.y,100,100)
  
  

  
  
 
   //if(keyDown(UP_ARROW)){
	 //ball.velocityX = -12;
	 //ball.velocityY = 0;
  //}


  
  //drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		text("UP_ARROW",50,50)
		console.log("upparrow test")
		Matter.Body.applyForce(ball,ball.position,
		  {x:85,y:-85})
		
	}
}



