var fixedR , movingR , gameObj1, gameObj2, gameObj3;
function setup() {

  createCanvas(1200,800);
  fixedR = createSprite(200, 200, 50, 50);
  movingR = createSprite(400, 200, 80, 30);
  gameObj1 = createSprite(100,100,50,50);
  gameObj2 = createSprite(200,400,50,50);
  gameObj3 = createSprite(300,100,50,50);
  gameObj4 = createSprite(400,400,50,50);

  gameObj1.shapeColor = "green";
  gameObj2.shapeColor = "green";
  gameObj3.shapeColor = "green";
  gameObj4.shapeColor = "green";

  gameObj2.velocityX = 3;
  gameObj4.velocityX = -3;
}

function draw() {
  background(0,0,0);  
  movingR.x = World.mouseX;
  movingR.y = World.mouseY;
  
  if (isTouching(movingR, gameObj1)) {
    movingR.shapeColor = "red";
    gameObj1.shapeColor = "red";
  }
  else {
    movingR.shapeColor = "blue";
    gameObj1.shapeColor = "green";
  }

  bounceOff(gameObj2,gameObj4); 
  
  drawSprites();
}
