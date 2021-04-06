var knight, knightRunning, knightIdle;
var bg;
var isRunning = false;

function preload(){
    knightRunning = loadAnimation("Caracter/1.png","Caracter/2.png","Caracter/3.png","Caracter/4.png",
    "Caracter/5.png","Caracter/6.png","Caracter/7.png","Caracter/8.png","Caracter/9.png",
    "Caracter/10.png","Caracter/11.png","Caracter/12.png","Caracter/13.png","Caracter/14.png",
    "Caracter/15.png","Caracter/16.png","Caracter/17.png","Caracter/18.png","Caracter/19.png",
    "Caracter/20.png");
    knightIdle = loadAnimation("Caracter/1.png");
    bg = loadImage("Background.jpg");
}

function setup(){
    canvas = createCanvas(1200,400);
    knight = createSprite(50,200,30,30);
    knight.addAnimation("running",knightRunning);
    knight.addAnimation("idle",knightIdle);
}

function draw(){
    background(bg);

    isMoving();
    if(!isRunning){
        knight.changeAnimation("idle",knightIdle);
    }
    if(isRunning){
        knight.changeAnimation("running",knightRunning);
    }

    if(keyIsDown(UP_ARROW)){
        knight.y = knight.y-2;
    }
    if(keyIsDown(DOWN_ARROW)){
        knight.y = knight.y+2;
    }
    if(keyIsDown(RIGHT_ARROW)){
        knight.x = knight.x+2;
    }
    if(keyIsDown(LEFT_ARROW)){
        knight.x = knight.x-2;
    }

    drawSprites();
}

function isMoving(){
    if(keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)){
        isRunning = true;
    }
    else{
        isRunning = false;
    }
}