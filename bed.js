var canvas;
let teapot;
let laptop;
let bed;
let stars;
let love;
let time;
let h,m,s;

function preload() {
    // Load model with normalise parameter set to true
    
    laptop = loadModel('laptop.obj', true);
    bed = loadModel('bed.obj', true);
    stars = loadImage('stars.jpg');

    img = loadImage('fabric.jpg');
   
   

  }

function setup(){
    let canvas= createCanvas(windowWidth,windowHeight,WEBGL);
    textureMode(IMAGE);
    // textureWrap(CLAMP);
    
    love = createGraphics(300, 300);
    //love.background(255, 100);
    love.background(random(10,50));
    love.fill(255);
    love.textAlign(CENTER);
    love.textSize(20);
    // love.text('5AM', 200, 100);
    frameRate(10);
   //ortho(-width, width, height, -height/2, 0.1, 100);
  
  }


  function draw(){
    // s=second();
    // m=minute();
    // h=hour();
    clear();
  
  //   time=(h+':'+m+':'+s);
  //   console.log(time);
  //  love.text(time, 200, 100);

    //background(0);
    
    background(0);
    texture(stars);
    push();
    rotateZ(frameCount*0.1);
    sphere(windowWidth*3);
    pop();
    orbitControl();
    ambientLight(random(200,255));

        pointLight(255,mouseX,mouseY);
       fill(250,235,215);
// box(2000,2000,3000);
    angleMode(DEGREES);
    //ambientLight(255);
    
    pointLight(255,mouseX,mouseY);
  // rotateZ(frameCount * 0.1);
  // rotateX(200);


  

push();
pointLight(255,mouseX,mouseY);
// rotateX(frameCount * 0.1);
rotateZ(90);
rotateX(90);
// rotateY(90);
noStroke();
specularMaterial(50);
//  texture(vid);
//shininess(10);
// scale(3);
// (k,z,x)
// texture(love);

translate(200,-1000,50);
scale(3);
// fill(80);
// blendMode(MULTIPLY);

model(laptop);
pop();

// fill(200);
noStroke();
texture(img);

scale(12);
rotateZ(180);
// rotateX(90);
translate(0,-50,-80);

model(bed);


  }