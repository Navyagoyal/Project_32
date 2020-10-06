const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var groundObj,standObj,slingShot,polygon_img,polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;
var score=0;
var backgroundImg;

function preload(){
  polygon_img=loadImage("polygon.jpg");
  backgroundImg = loadImage("bg.png");
    getBackgroundImg();
}
function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new Slingshot(polygon,{x:100,y:200});
  groundObj= new Ground(300,300,410,10);
  standObj = new Ground(290,315,210,20);
  //Level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //Level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //Level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }
  Engine.update(engine);
  noStroke();
  textSize(35);
  fill("black");
  text("Score:"+score,600,40);
  groundObj.display();
  standObj.display(); 
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display(); 
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  block14.display();
  block14.score();
  block15.display();
  block15.score();
  block16.display();
  block16.score();
  slingShot.display();
 
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
 
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
   slingShot.attach(this.polygon); 
  }
}

async function getBackgroundImg()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour >= 06 && hour<=18){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jng";
    }
    
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}