var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleimg;
var leaves;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png")
  orangeleaf = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.X = world.mouseX
 
  createApple();

  createleaves();

  spawnApples();

  drawSprites();
}


function spawnApples() {

  apple = Math.round(random(1,2));

  if (frameCount % 80 === 0)
    if (apple == 1){
      function  createApple() {
        apple = createSprite(random(50, 350),40, 10, 10);
        apple.addImage(appleimg); 
        apple.scale = 0.4;
        apple.velocityY = 4;
        apple.lifetime = 200;
      
      }
    }
    else {
      function createleaves() {
        leaf = createSprite(random(50, 350),40, 10, 10);
        leaf.addImage(orangeleaf);
        leaf.scale = 0.4;
        leaf.velocityY = 4;
        leaf.lifetime = 200;
       
       }
    }

}
