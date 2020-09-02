
var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
thickness=random(22,28);   
wall=createSprite(1500,200,150,200);
weight=random(30,52);
bullet=createSprite(500,200,200,50);
speed=random(100,150);
bullet.velocityX=speed;


}

function draw() {
  background(255,255,255);  

  if( hasCollide(bullet,wall)){

    bullet.velocityX=0;

    var damage=0.5*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.ShapeColour=colour(255,0,0);
    }
    if(damage<10){
      wall.ShapeColour=colour(0,255,0);
    }

  }


  drawSprites();
  hasCollide(bullet,wall);
}


function hasCollide(bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}

return false;

}
