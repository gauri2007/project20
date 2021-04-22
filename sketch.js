var car,wall;
var speed,weight;
var Deformation;


function setup() {
  createCanvas(1600,800);
  car=createSprite(50,200,50,50);
  wall=createSprite(1000,200,60,400);
  
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car.velocityX=speed;
  if( wall.x-car.x < wall.width/2 + car.width/2){
    car.velocityX=0;
    Deformation=0.5*weight*speed*speed/22500;
    if(Deformation<100){
      car.shapeColor="green";
    }
    if(Deformation>100 && Deformation<180){
      car.shapeColor="yellow";
    }
    if(Deformation>180){
      car.shapeColor="red";
    }

  }
}