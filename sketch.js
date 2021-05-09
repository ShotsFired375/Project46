const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg, diverAnimation, sharkImg, titleIMG, bg;
var diver1, beginningGreeting, sparklesGIF;
var gameState = 0;


function preload() {
  bgImg = loadImage("images/riverBGIMG.png");
  sharkImg = loadImage("images/sharkImg.png");
  titleImg = loadImage("images/titleIMG.png");
  sparklesGIF = createImg("images/infinitesparkles.gif");
  sparklesGIF2 = createImg("images/infinitesparkles.gif");
}


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

 diver1 = new Diver(150, 200, 250, 150);

 beginningGreeting = new Instructions();

}


function draw() {
  if (gameState===1) {
    background("black");
    bg = image(bgImg, 0, 7, 3200, 390);  
  } else if (gameState===0){
    background("lightblue");
  } else {
    background("lightgrey");
  }

  if (gameState===0) {
    image(titleImg, 50, 13, 700, 100);
    sparklesGIF.position(425,255);
    sparklesGIF.size(40,40);
    sparklesGIF2.position(485,230);
    sparklesGIF2.size(40,40);
  } else {
    sparklesGIF.size(0,0);
    sparklesGIF2.size(0,0);
  }

  if (keyDown("RIGHT")) {
    camera.position.x = camera.position.x+10;
  }

  beginningGreeting.display();
  diver1.display();

  drawSprites();
}