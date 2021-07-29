var runner , path , pathimg , invisibleline , invisibleline2 ;
var bomb ,  coin ,coini , bombi , poweri ,runneri ;
function preload(){
  //to load all image and animatio
 runneri = loadAnimation("runner-1.png" , "runner-2.png") ;
 pathimg = loadImage("path.png")
 bombi = loadImage("bomb.png")
 coini = loadImage("coin.png")
 poweri = loadImage("power.png")
 cokei = loadImage("energyDrink.png")
}

function setup(){
  createCanvas(400,800);
  //to create path
  path = createSprite(200,400,200,400)
  path.addImage(pathimg)
  path.velocityY = 3
  path.scale = 1.3

  //to create runner
   runner = createSprite(200,500,20,20)
   runner.addAnimation("running" , runneri)
   runner.scale = 0.09

   //to create invisible walls
   invisibleline = createSprite(10,300,10,600)
   invisibleline.visible = false ;

   invisibleline2 = createSprite(395,300,10,600)
   invisibleline2.visible = false ;
  
   coin = createSprite(60,100,10,10);
   coin.addImage(coini);
   coin.scale = 0.4
   coin.velocityY = 2
 
   bomb = createSprite(200,250,20,20);
   bomb.addImage(bombi);
   bomb.scale = 0.1
   bomb.velocityY = 2

   coke = createSprite(350,50,20,20);
   coke.addImage(cokei);
   coke.scale = 0.2
   coke.velocityY = 2
}

function draw() {
  background(1);

  if(keyDown(RIGHT_ARROW)){
   runner.x = runner.x+5

  }

  if(keyDown(LEFT_ARROW)){
    runner.x = runner.x-5
 
   }
   
   if(path.y > 500){
    path.y = 200
  }
  
  if(runner.isTouching(coin)){
    coin.visible = false
}

if(runner.isTouching(coke)){
  coke.addImage(poweri)
  runner.y = runner.y-2
}

if(runner.isTouching(bomb)){
  bomb.visible = false
  runner.y = runner.y+1
}



runner.collide(invisibleline)
runner.collide(invisibleline2)


spwan();

 drawSprites();
}

function spwan(){
if(frameCount % 600 === 0){
  coin = createSprite(60,100,10,10);
  coin.addImage(coini);
  coin.scale = 0.4
  coin.velocityY = 2

}

if(frameCount  % 400  === 0){
  bomb = createSprite(200,250,20,20);
  bomb.addImage(bombi);
  bomb.scale = 0.1
  bomb.velocityY = 2
}

if(frameCount % 800 ===0 ){
  coke = createSprite(350,50,20,20);
  coke.addImage(cokei);
  coke.scale = 0.2
  coke.velocityY = 2
}





}