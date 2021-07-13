
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,180,10,30)
  trex.addAnimation("sac",trex_running)
  trex.scale=0.5
}

function draw(){
  background("white")

  //if u press space
  if(keyDown("space")){
trex.velocityY=-5
  }
  //gravity
  trex.velocityY=trex.velocityY+0.8
  
drawSprites()
}
