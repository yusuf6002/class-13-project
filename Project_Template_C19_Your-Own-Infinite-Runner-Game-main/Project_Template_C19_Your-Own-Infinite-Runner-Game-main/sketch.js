var rocket, rocketimg;
var ufo ,ufoimg;
var space ,background;
var asteroid , asteroidGROUP ,asteroidimg;
var game_over , end ,game_overimg;
var score;


function preload(){
rocketimg = loadImage("untitled.png");
ufoimg = loadImage("untitled2.png");
background = loadImage("nasa-galaxy_pu4.jpg");
asteroidimg = loadImage("untitled3.png");
game_overimg = loadImage("light ufo.jpg");
}

function setup() {
 createCanvas(200,600);

 rocket = createSprite(160,50,50,20);
 rocket.addImage("rocket",rocketimg);

space = createSprite(100,300);
space.addImage("space",background);
space.velocityY = 1;
asteroid = new Group();


}

function draw() {
   
 if(keyDown("left_arrow")){
        rocket.x = rocket.x + 4;
 }

 if(keyDown("right_arrow")){
            rocket.x = rocket.x + 4;  
 }

 if(keyDown("space")){
    rocket.velocityY = -15;   
  }  

 text("Score: "+ score, 500,50);
    
 score = score + Math.round(getFrameRate()/60);

 if(rocket.isTouching(asteroid))
 {
    end = createSprite(100,300);
    end.addImage("over",game_over);
 }

spawnAsteroids();

}

function spawnAsteroids()
{
    if (frameCount % 240 === 0)
 var asteroid =createSprite(200, -50);
 asteroid.addImage(asteroidimg);
 asteroid.velocityY = 1;

rocket.depth = asteroid.depth;
rocket.depth +=1;

asteroid.lifetime = 800;

asteroidGROUP.add(asteroid);
}