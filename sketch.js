const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    polygon = Bodies.circle(100, 235, 40);
    box1 = new Box(330, 235, 30, 20);
    box2 = new Box(360, 235, 30, 20);
    box3 = new Box(390, 235, 30, 20);
    box4 = new Box(420, 235, 30, 20);
    box5 = new Box(450, 235, 30, 20);
    box6 = new Box(480, 235, 30, 20);
    box7 = new Box(510, 235, 30, 20);
    box8 = new Box(360, 255, 30, 20);
    box9 = new Box(390, 255, 30, 20);
    box10 = new Box(420, 255, 30, 30);
    box11 = new Box(450, 255, 30, 20);
    box12 = new Box(480, 255, 30, 20);
    box13 = new Box(390, 275, 30, 20);
    box14 = new Box(420, 275, 30, 20);
    box15 = new Box(450, 275, 30, 20);
    box16 = new Box(420, 295, 30, 20);
    Base = new Ground(300, 420, box1.body.width*7, 10)
    sling = new SlingShot(polygon, {x:120, y:235});
}

function draw(){
    background("grey");
    drawSprites();
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    Base.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}