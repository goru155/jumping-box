var box,edges;
var redsuf,bluesuf,greensuf,yellowsuf; 
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    createCanvas(600,600);

    //create 4 different surfaces
    redsuf=createSprite(70,580,120,20);
    redsuf.shapeColor=color(255,0,0)
    
    bluesuf=createSprite(220,580,120,20);
    bluesuf.shapeColor=color(0,0,255);

    greensuf=createSprite(370,580,120,20);
    greensuf.shapeColor=color(0,128,0);

    yellowsuf=createSprite(520,580,120,20);
    yellowsuf.shapeColor=color(255,255,0)
    //create box sprite and give velocity

    box=createSprite(random(20,570),100,30,30);
    box.shapeColor=color(255,255,255);
    box.velocityY=6;
    box.velocityX=3;
}

function draw() {
    background(169,169,169);
    edges=createEdgeSprites();
    box.bounceOff(edges);
    //add condition to check if box touching surface and make it box
    
    if(box.isTouching(yellowsuf)){
    box.shapeColor=color(255,255,0);
    box.bounceOff(yellowsuf)
    }

    if(box.isTouching(redsuf)){
    box.shapeColor=color(255,0,0);
    box.bounceOff(redsuf);
    }

    if(box.isTouching(greensuf)){
    box.shapeColor=color(0,128,0);
    box.bounceOff(greensuf);
    }

    if(box.isTouching(bluesuf)){
    box.shapeColor=color(0,0,255);
    box.bounceOff(bluesuf);
    }

    drawSprites();
}
