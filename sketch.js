var backgroundImage
var RedB,BlueB,GreenB,PinkB
var red_balloonImage,blue_balloonImage,green_balloonImage,pink_balloonImage
var bowImage
function preload(){
  backgroundImage = loadAnimation("background0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  bowImage = loadImage("bow0.png");
}
function setup() {
  createCanvas(600, 600);
scene = createSprite(0,0,600,600)
 scene.addAnimation("background",backgroundImage);
  scene.scale = 3.5;
  scene.velocityX = -2;
  scene.x = scene.width/2;
  bow = createSprite(570,570)
 bow.addImage(bowImage)
  RedB = new Group()
  BlueB = new Group()
  GreenB = new Group()
  PinkB = new Group()
}

function draw() {
background(255);
  bow.y = mouseY;
 if(scene.x<0) {
   scene.x = scene.width/2;
 }
var select_balloon = Math.round(random(1,4));
  if (World.frameCount%100===0){
    if (select_balloon == 1){
      redBalloon();
    }
    else if(select_balloon==2){
      blueBalloon();
    }
    else if(select_balloon==3){
      greenBalloon();
    }
    else if(select_balloon==4){
      pinkBalloon();
    }
  }
  
  
drawSprites();
}
function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  RedB.add(red);
}
function blueBalloon(){
   var blue = createSprite(0,Math.round(random(20,370)),10,10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  BlueB.add(blue); 
}
function greenBalloon(){
  var green  = createSprite(0,Math.round(random(20,370)),10,10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  GreenB.add(green);    
}
function pinkBalloon(){
  var pink  = createSprite(0,Math.round(random(20,370)),10,10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  PinkB.add(pink);  
}