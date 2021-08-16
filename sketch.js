var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10;
 var wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23;
var gameState, man, manAnimation , manStanding;
var lifetime;
var check = 0;
var direction;

function preload(){
  manAnimation = loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png","images/man7.png","images/man8.png");
  manStanding = loadImage("images/man1.png"); 
  wall = loadAnimation("images/st.png");
  }

function setup() {
  createCanvas(windowWidth,windowHeight);
  gameState = "start";
  man = createSprite(200,600,10,10);
  man.addImage("standing",manStanding);
  man.addAnimation("running",manAnimation);
  man.scale = 0.8;
  //man.debug = true;
  man.setCollider("circle",5,0,30);
  lifetime = 3;
  direction = "right";
  
   wall1 = createSprite(770, 50, 1000, 10);//
   wall2 = createSprite(275, 290, 10, 470);//
   wall3 = createSprite(330,520, 100, 10);//
   wall4 = createSprite(1270,170, 10, 250);//
   wall5 = createSprite(1265,650, 10, 300);//
   wall6 = createSprite(320,680, 100, 10);//
   wall7 = createSprite(275,740, 10, 120);//
   wall8 = createSprite(770,800, 1000, 10);//
   wall9 = createSprite(1120,700, 10, 200);//
   wall10 = createSprite(1190,505, 150, 10);//
   wall11 = createSprite(1120,350, 10, 300);//
   wall12 = createSprite(1050,200, 150, 10);//
   wall13 = createSprite(980,430, 10, 450);//
   wall14 = createSprite(800,650, 350, 10);//
   wall15 = createSprite(630,550, 10, 200);//
   wall16 = createSprite(560,450, 150, 10);//
   wall17 = createSprite(580,320, 350, 10);//
   wall18 = createSprite(750,415, 10, 200);//
   wall19 = createSprite(350,120, 10, 100);//
   wall20 = createSprite(730,110, 10, 130);//
   wall21 = createSprite(780,170, 100, 10);//
   wall22 = createSprite(520,190,150,10);
   wall23 = createSprite(860,430,10,200);//
  }

function draw() {
  background(0);  
 // text(mouseX+","+mouseY,mouseX,mouseY);
 // console.log(windowWidth);
  //console.log(windowHeight);
  
  if(keyDown("space")&& gameState==="start"){
    man.changeAnimation("running",manAnimation)
    gameState ="play";
 };

    if(man.isTouching(wall1)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall2)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall3)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall4)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall5)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall6)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall7)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall8)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall9)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall10)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall11)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall12)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall13)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall14)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall15)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall16)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall17)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall18)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall19)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall20)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall21)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall22)&& gameState==="play"){
      check = 1;
    }

    if(man.isTouching(wall23)&& gameState==="play"){
      check = 1;
    }

    if(check === 1 && lifetime>0 && gameState==="play"){
      man.x = 350;
      man.y = 600;
      gameState = "start";
      lifetime--;
      check = 0;
    }

    if(lifetime===0 && gameState==="play"){
      gameState = "lost";
    }

    if(man.x>1250){
      gameState = "won";
    }

   /* if(keyDown(RIGHT_ARROW)&& gameState === "play"){
      direction = "right";
    }

    else if (keyDown(LEFT_ARROW)&& gameState==="play"){
      direction = "left";
    }

    if(direction==="left"){
      man.mirrorX(man.mirrorX()*-1);
    }

  else if(direction==="right"){
    man.mirrorX(man.mirrorX()*+1);
  }
console.log(direction);*/

  drawSprites();
  textSize(20);
text("LIFETIME: " + lifetime,1450,75);
if(gameState==="lost"){
  rectMode(CENTER);
  fill("yellow");
  rect(windowWidth/2-50,windowHeight/2,800,200);
  fill("red");
  textSize(70);
  textStyle(BOLD);
  text("YOU LOST!! " ,windowWidth/2-200,windowHeight/2 );
  textSize(30);
  text("PRESS R to RESTART " ,windowWidth/2-200,windowHeight/2+100);
}

if(gameState==="won"){
  rectMode(CENTER);
  fill("yellow");
  rect(windowWidth/2-50,windowHeight/2,800,200);
  fill("red");
  textSize(70);
  textStyle(BOLD);
  text("GOOD JOB,YOU WON !! " ,windowWidth/2-450,windowHeight/2 );
  textSize(30);
  text("PRESS R to RESTART " ,windowWidth/2-200,windowHeight/2+100);  
}
}

function keyPressed(){
  if(keyCode=== RIGHT_ARROW && gameState==="play"){
    man.x += 30;
    man.changeAnimation("running",manAnimation);
    }

     else if(keyCode===LEFT_ARROW && gameState==="play"){
      man.x -= 30;
      man.changeAnimation("running",manAnimation);
      
    }

     else if(keyCode===UP_ARROW && gameState==="play"){
      man.y += 10;
      man.changeAnimation("running",manAnimation);
    }

     else if(keyCode=== DOWN_ARROW && gameState==="play"){
      man.y -= 10;
      man.changeAnimation("running",manAnimation);
    }
else {
  man.changeAnimation("standing",manStanding);
}

if(keyCode===82 || keyCode===114){
  gameState="start";
  lifetime=3;
}


}