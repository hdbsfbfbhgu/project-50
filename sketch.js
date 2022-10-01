
var bottomGround
var topGround
var plane,planePic
var obstacle1,obstacle1Img
var obst2,obst2Img
var wall

function preload(){
obstacle1Img = loadImage("assets/obstacle1.png")
obst2Img = loadImage("assets/obtacle 2.png")
planePic = loadImage("assets/planepic-removebg-preview.png")
}

function setup(){
createCanvas(700,500)

obstacle1 = createSprite(340,405,50,50)
obstacle1.scale=0.9
obstacle1.addImage("obstacle",obstacle1Img)
wall=createSprite(340,350,900,50)
wall.visible = false


obst2 = createSprite(200,300,50,50)
obst2.scale=0.125
obst2.addImage("obatacle",obst2Img)






//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;


topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
plane = createSprite(100,200,20,50);
plane.scale = 0.25;
plane.addImage("plane",planePic)



}

function draw() {
  
  background("lightblue");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            plane.velocityX= -6 ;
            
          }

          //adding gravity
          plane.velocityY = plane.velocityX+2;
   
        drawSprites();
        
}
