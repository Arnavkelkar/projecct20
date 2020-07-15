var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
  wall=createSprite(700,200,60,height/2);
  wall.shapeColor=color(80);
  deformation=0.5*weight*speed*speed/22500
}

function draw() {
  background(0);
  car.collide(wall);

  if (deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
  if(deformation>100 && deformation<180)
  {
    car.shapeColor=color(255,230,0)
  }
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0)
  }

  drawSprites();
}