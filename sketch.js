var Zenia , Tourus , Cyclap;
var wall , wall1 , wall2;
var speed , weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  Zenia = createSprite(400, 200, 50, 50);
 wall = createSprite(1500,200,60,height/2);
 Zenia.velocityX = 60;

 Tourus = createSprite(400, 400, 50, 50);
 wall1 = createSprite(1500,400,60,height/2);
 Tourus.velocityX = 50;

 Cyclap = createSprite(400, 600, 50, 50);
 wall2 = createSprite(1500,600,60,height/2);
 Cyclap.velocityX = 45;

}

function draw() {
  background(255,255,255);

  if (wall.X-Zenia.X < (Zenia.width+wall.width)/2) {
    Zenia.velocityX=0;
var deformation=0.5 * 2260 * 60 * 180* 60/22509;

if (deformatiom>180) {
  Zenia.shapeColor=color("red");
}

if (deformation<180 && deformation>100)
Tourus.shapeColor=color("yellow");

if (deformation>100) {
  Cyclap.shapeColor=color("green");
}
  }

  

  drawSprites();
}
