  var PLAY=1;

  var END=0;

  var monkey , monkey_running
  
  var banana ,bananaImage, obstacle, obstacleImage
  
  var fruitGroup, obstaclesGroup
  
  var score
  
  var gameState = PLAY;

  var survivalTime=0;

  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");

  }



  function setup() {

    monkey=createSprite(80,315,20,20);
    monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;

    fruitGroup=createGroup();
    obstaclesGroup=createGroup();

   ground=createSprite(400,350,900,10);
    ground.velocityX=-4;
    ground.x=ground.width  /2;

  }


  function draw() {
  background("white");
   stroke("black");
    textSize(20);
    fill("black");
    text("SurvivalTime : " +survivalTime,100,50);

    if (gameState===PLAY) {
  survivalTime=Math.ceil(frameCount/frameRate());
  if (ground.x < 0){    
      ground.x = ground.width/2;
    }
  if(fruitGroup.isTouching(monkey))  {
    fruitGroup.destroyEach();  


    }
    if(keyDown("space")&& monkey.y >= 220) {
      monkey.velocityY = -10;
    }
    monkey.velocityY = monkey.velocityY + 0.8
  if(obstaclesGroup.isTouching(monkey)){
     gameState=END;
    }
  fruit();
    obstacles_();
    }



    else if (gameState===END) {
   ground.velocityX = 0;
      monkey.velocityY = 0;
      obstaclesGroup.setVelocityXEach(0); fruitGroup.setVelocityXEach(0); obstaclesGroup.setLifetimeEach(-1); fruitGroup.setLifetimeEach(-1);


    }



    monkey.collide(ground);

    drawSprites()
  }

  function obstacles_ ()  {
  if (frameCount % 300 ===0) {
        var obstacle = createSprite(280,330,30,20);
        obstacle.velocityX = -4;


        obstacle.lifetime=150;

        obstacle.scale=0.1;

        var rand = Math.round(random(1,6));

        switch(rand) {
          case 1: obstacle.addImage( obstaceImage);
            break;
            case 2 : obstacle.addImage( obstaceImage);
            break;
            case 3 : obstacle.addImage( obstaceImage);
            break;
            case 4 : obstacle.addImage( obstaceImage);
            break;
            case 5 : obstacle.addImage( obstaceImage);
            break;
            case 6 : obstacle.addImage( obstaceImage);
            break;
            default:break;
        }
  obstaclesGroup.add(obstacle);
      }





  }
  function fruit() {
  if (frameCount % 80 === 0) {
           banana=createSprite(400,200,20,20  )
         banana.addImage("banana", bananaImage)
          banana.y=Math.round(random(120,200));
         banana.velocityX=-5;
         banana.setLifetime=50;

  banana.scale=0.1;
       fruitGroup.add(banana);


      }

  }

