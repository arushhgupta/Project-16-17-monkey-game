var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":4,"version":".Jkifpi8I15pVfn4CPgIvOV_9ZhJrD0V","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"_TuvhS1T11zSsxRZuyj3kciBIDYpilF2","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"A4uYtEWLPEreewqs7gDNPAvZrqyEZjUz","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;
  
var monkey = createSprite(200, 320, 20, 50);
monkey.setAnimation("monkey");

monkey.scale = 0.2;
monkey.x=50;

var ground = createSprite(200, 380, 400, 20);
ground.x = ground.width /2;

var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;

var ObstacleGroup = new Group();
var bananaGroup = new Group();




function draw() {
  background("white");
  background(255);
  
     if(keyDown("space")) {
      monkey.velocityY = -12;
     }
     
       monkey.velocityY = monkey.velocityY + 0.8;
       
        monkey.collide(invisibleGround);
       
       spawnObstacles();
 drawSprites();
   
}

function spawnObstacles() {
  if(World.frameCount % 80 === 0) {
    var obstacle = createSprite(400,350,10,40);
   
    
    
    
    obstacle.setAnimation("Stone");
    
            
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 100;
   
    ObstacleGroup.add(obstacle);
  }
}

function spawnfood() {
  
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(120, 200);
    banana.setAnimation("Banana");
    banana.scale = 0.5;
    banana.velocityX = -3;
    

    banana.lifetime = 134;
    
  
    banana.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
    bananaGroup.add(cloud);
  }
  
}


  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
