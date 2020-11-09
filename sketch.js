Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var start = 0;
var end = 1;
var gamestate = start;
var count = 0

var divisionHeight=300;
var score = 0;

function setup() {

  createCanvas(810, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for (var k = 5; k <=width; k = k + 80) {
  
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 35; j <=width; j=j+50){
    
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 10; j <=width-10; j=j+50){
    
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 35; j <=width; j=j+50) {
    
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 10; j <=width-10; j=j+50){
    
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {

  background("red");

  textSize(30)
  text("Score : " + score,20,30);

  Engine.update(engine);
  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  ground.display();


  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 5 && particle.body.position.x < 85){
      
       score = score + 50;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 86 && particle.body.position.x < 165){
      
       score = score + 200;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 166 && particle.body.position.x < 245){
      
       score = score + 400;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 246 && particle.body.position.x < 325){
      
       score = score + 150;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 326 && particle.body.position.x < 405){
      
       score = score + 300;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 406 && particle.body.position.x < 485){
      
       score = score + 350;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 486 && particle.body.position.x < 565){
      
       score = score + 500;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 566 && particle.body.position.x < 645){
      
       score = score + 450;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 646 && particle.body.position.x < 725){
      
       score = score + 250;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(particle != null){
  
    particle.display();
    
    if(particle.body.position.y > 760){
    
      if(particle.body.position.x > 726 && particle.body.position.x < 805){
      
       score = score + 100;
       particle = null;
       if(count >= 5) gamestate = end;
      }
    }
  }

  if(gamestate === end){
  
    textSize(60);
    text("GAME OVER",width/2-150,height/2-100);
  }

  textSize(25);
  text("50",30,550);
  text("200",105,550);
  text("400",185,550);
  text("150",265,550);
  text("300",345,550);
  text("350",425,550);
  text("500",505,550);
  text("450",585,550);
  text("250",665,550);
  text("100",745,550);
}

function mousePressed(){

  if(gamestate !== end){

   count++
   particle = new Particle(mouseX, 10, 10, 10);
  }
}