
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, groundImage;

var bird, birdImage, birdSound;

var cherry,cherryGroup, cherryImage;

var virus, virusImage, virusGroup;

var score= 0;
function preload()
{
   groundImage= loadImage("ground1.jpg");

   birdImage= loadImage("birdside_02.png")

   cherryImage= loadImage("cherry.png");

   virusImage= loadImage("virus03_04.png")

   //birdSound= loadSound("BirdSound.mp3")

   
}

function setup() {
	createCanvas(800, 750);



	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
 // ground = createSprite(200,180,400,20);
  //ground.addImage(groundImage);
  //ground.x = ground.width /2;

  bird= createSprite(100,200,1,1);
  bird.addImage(birdImage);
  bird.scale= 0.3;

  cherryGroup= createGroup();
  virusGroup= createGroup();
  //birdSound.play();

 
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(0);
  background(0);
  
  textSize(25);
  fill("orange")
  stroke("red")
  text("score : "+ score , 100, 100);
  
  //ground.velocityX =-4;

  //console.log(score)
  
  
  //if (ground.x < 0){
  //ground.x = ground.width/2;
  //}
  
  spawnCherry();
  spawnVirus();
  
  if(cherryGroup.isTouching(bird))
  {
    cherryGroup.setLifetimeEach(-1);
    cherryGroup.setVelocityEach(0);
    bird.scale= bird.scale+0.1;
    score= score+1;
  }

  if(virusGroup.isTouching(bird))
  {
    virusGroup.setLifetimeEach(-1);
    virusGroup.setVelocityEach(0);
    bird.scale= bird.scale-0.1;
    score= score-1;
  }



  if(keyDown("Right_Arrow"))
  {
    bird.position.x= bird.position.x+ 20;
  }
  
  if(keyDown("Left_Arrow"))
  {
    bird.position.x= bird.position.x-20;
  }
  
  if(keyDown("Up_Arrow"))
  {
    bird.position.y= bird.position.y-20;
  }
  
  if(keyDown("Down_Arrow"))
  {
    bird.position.y= bird.position.y+ 20;
  }

  
  drawSprites();
 

  
}

function spawnCherry()
{
  if(frameCount%60 === 0)
  {
    var cherry= createSprite(random(500, 700), random(180,280),20,20);
    
    cherry.addImage(cherryImage);
    cherry.velocityX= -2;

    cherry.scale= 0.2;

    cherryGroup.add(cherry);
  }
}
function spawnVirus()
{
  if(frameCount%70 === 0)
  {
    var virus= createSprite(random(500,700),random(100,400),20, 20)
    virus.addImage(virusImage)
    virus.velocityX=-2;
    virus.scale= 0.2;

    virusGroup.add(virus);
   }
   
}