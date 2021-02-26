const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var bgImage;
var hero;
var ground;
var rope;
var box

function preload() {
//preload the images here
bgImage = loadImage("Images/images/GamingBackground.png")
}

function setup() {
  createCanvas(1400, 800);

  engine = Engine.create();
  world = engine.world

  hero = new Hero(600,400,100);
  ground = new Ground(600,700,1400,10)
  rope = new Fly(hero.body,{x:600,y:100})
  box1 = new Box(800,650,100,100)
  box2 = new Box(800,550,100,100)
  box3 = new Box(800,450,100,100)
  box4 = new Box(800,350,100,100)
  // create sprites here

}

function draw() {
  background(bgImage);

  Engine.update(engine)

  hero.display();
  ground.display();
  box2.display();
  box3.display();
  box4.display();

}
function mouseDragged()
{
 Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

