const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var ground;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;

  ground= new Ground(240,785,500,10);


  //divisions
  for(var k=0; k<= width; k=k+80) {
    divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  // plinkos
  for(var j= 40; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,90,10));
  }

  for(var j= 15; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j= 40; j<=width; j=j+50) {
    plinkos.push(new Plinko(j,275,10));
  }

  for(var j= 15; j<=width-10; j=j+50) {
    plinkos.push(new Plinko(j,370,10))
  }



}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  ground.display();

  for(var k=0; k<divisions.length; k++) {
    divisions[k].display();
   }

   
   for(var j = 0; j < plinkos.length; j++) { 
    plinkos[j].display();
    }

  if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }

   for(var i=0; i<particles.length; i++){
     particles[i].display();
   }




}