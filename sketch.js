const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var side1, side2, side3, paper, bin;
var ground;
function setup(){
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,380,1200,15,"red");
    bin = new Dustbin();
    paper = new Paper(200,200);
}

function draw(){
    background("lightblue");
    Engine.update(engine);
   ground.display();
   bin.display();
   paper.display();
}
function keyPressed() {
    if(keyCode == UP_ARROW) {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    }
}