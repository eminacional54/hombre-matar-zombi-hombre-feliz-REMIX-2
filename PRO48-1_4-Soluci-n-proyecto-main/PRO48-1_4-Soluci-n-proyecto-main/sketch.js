var score =0;
var shooter, zombie, bullet, bg;

var zombieImg, bulletImg, blastImg, bgImg, shooter_3Img;

var zombieGroup, bulletGroup;




var life =3;
var score=0;
var gameState=1
gun
function preload(){
  shooter_3Img = loadImage("shooter_3.png ")
 blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  zombieImg = loadImage("zombie.png")
  bgImg= loadImage("bg.jpeg")
}
function setup() {
  createCanvas(800, 600);

  bg= createSprite(50, width/2, 100,height);
  bg.addImage(bg.jpeg)
  
  shooter= createSprite(100, height/2, 50,50);
  shooter.addImage(shooter_3Img)
  shooter.scale=0.2
  
  bulletGroup = createGroup();   
  zombieGroup = createGroup() 
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Vida: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  bg.html("Puntuación: "+score)
  bg.style('color:red'); 
  bg.position(width-200,20)

  if(gameState===1){
    shooter.y=mouseY  

    if (frameCount % 80 === 0) {
      drawzombie();
    }

   

    if(keyDown("space")){
      shootBullet();
    }

    if (zombieGroup.collide(backBoard)){
      handleGameover(zombieGroup);
    }
   
    drawSprites();
  }
    
  
}




function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= shooter.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}

function handleBubbleCollision(zombieGroup){
    if (life > 0) {
       score=score+1;
    }

   blast= createSprite(bullet.x+60, bullet.y, 50,50);
  blast.addImage(blastImg)
   blast.scale=0.3
 blast.life=20
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();
    

    if (life === 0) {
      gameState=2
      
     
    }
  
}
