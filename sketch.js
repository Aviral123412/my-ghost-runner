var tower,towerImg;
var door,doorImg;
var climber,climberImg;
var ghost,ghostImg;
var doorGroup
var climberGroup
var killsprite                       
var killergroup
var gamestate="play"
function preload(){

towerImg=loadImage("tower.png");
doorImg=loadImage("door.png");
climberImg=loadImage("climber.png");
ghostImg=loadImage("ghost-jumping.png");

  
  
}
function setup(){
  
createCanvas(500,500);
tower=createSprite(250,250);
tower.addImage(towerImg)
tower.scale=0.8;
  doorGroup=new Group()
  climberGroup=new Group()
  ghost=createSprite(250,250)
  ghost.addImage(ghostImg)
  ghost.scale=0.3
  killergroup=new Group()
}

function draw(){
background("black")
  if(gamestate==="play"){
  
tower.velocityY=2;
  if(tower.y>400){
  tower.y=200
  }
  if(keyDown("LEFT_ARROW")){
    ghost.x=ghost.x-5
  }
  if(keyDown("RIGHT_ARROW")){
    ghost.x=ghost.x+5
  }
  if(keyDown("Space")){
    ghost.y=ghost.x-10
  }
  ghost.velocityY+=0.5
  if(climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
  if(killergroup.isTouching(ghost)||ghost.y>500){
    ghost.destroy()
    gamestate="end"
  }
  
spawndoors();
  drawSprites();
  }
  if(gamestate==="end"){
    textSize(30)
    fill("yellow")
    text("gameover",220,250)
  }

}
function spawndoors(){
  if(frameCount%150===0){
    door=createSprite(200,-20)
    door.addImage(doorImg)
    climber=createSprite(200,30)
    climber.addImage(climberImg)
     door.velocityY=2;
    door.x=Math.round(random(100,400))
    climber.x=door.x
    climber.velocityY=2
    killSprite=createSprite(200,35)
    killSprite.width=climber.width
    killSprite.height=2
    killSprite.x=door.X
    killSprite.veloacityY=2;
    killergroup.add(killSprite)
    killSprite.lifetime=500;
    killSprite.visible=false
    killSprite.debug=true   
    doorGroup.add(door)
    door.lifetime=500;
    climber.lifetime=500;
    climberGroup.add(climber);
    ghost.depth=door.depth+1
    
    
        
    
  }
}







