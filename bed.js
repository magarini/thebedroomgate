var canvas;
let teapot;
let laptop;
let bed;
let stars;
let j=0;

function preload() {
    // Load model with normalise parameter set to true
    
    laptop = loadModel('laptop.obj', true);
    bed = loadModel('bed.obj', true);
    stars = loadImage('stars.jpg');

    img = loadImage('fabric.jpg');
   
    soundFormats('mp3', 'ogg');
    mySound = loadSound('bedroom site_fadein.mp3');

  }

function setup(){
    let canvas= createCanvas(windowWidth,windowHeight,WEBGL);
    textureMode(IMAGE);
  
    frameRate(10);
  
  }


  function draw(){

    clear();
    background(0);
    texture(stars);
    push();
    rotateZ(frameCount*0.1);
    sphere(windowHeight*3);
    pop();
    orbitControl();
    ambientLight(random(200,255));

        pointLight(255,mouseX,mouseY);
       fill(250,235,215);
    angleMode(DEGREES);
    pointLight(255,mouseX,mouseY);

push();
pointLight(255,mouseX,mouseY);
rotateZ(90);
rotateX(90);
noStroke();
specularMaterial(50);


translate(200,-1000,50);
scale(3);


model(laptop);
pop();

noStroke();
texture(img);

scale(12);
rotateZ(180);
translate(0,-50,-80);

model(bed);


  }

  function mousePressed(){
    j=j+1;
    if (j<2){
    mySound.setVolume(0.4);
    mySound.loop();
  }
  }

  