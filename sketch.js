
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png");

}

function setup(){
  createCanvas(400,400);
  
}
ship = createSprite(200,200)

function draw() {
  
  background("orange");

 drawSprites();
}