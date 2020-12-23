
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
//creating Monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" , monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
}
  
  score = 0;

function draw() {
  background("white");
  
    //displaying score
  text("Survival Time: "+ score,200, 50);
  
   //scoring
    score = score + Math.round(getFrameRate()/60)
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  FoodGroup();
  
  obstaclesGroup();
  
   drawSprites();
}

function obstaclesGroup(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(280,320,2,2);
   obstacle.velocityX = -(6 + score/100);
   obstacle.addImage("moving" , obstaceImage);
   
   //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
  
 }
}


function FoodGroup() {
  //write code here to spawn the clouds
  if (frameCount % 90 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(110,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
     banana.scale = 0.14;
    
     banana.depth = monkey.depth;
     monkey.depth = monkey.depth + 1;
  }
}
