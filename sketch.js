var music;
var canvas


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different blocks
    block1 = createSprite(100, 580, 200, 20);
    block1.shapeColor = "blue";

    block2 = createSprite(310, 580, 200, 20);
    block2.shapeColor = "orange";

    block3 = createSprite(520, 580, 200, 20);
    block3.shapeColor = "crimson";

    block4 = createSprite(730, 580, 200, 20);
    block4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20, 750), 15, 20, 20);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    createEdgeSprites();

    //add condition to check if box touching block and make it box
    if(isTouching(block3, box)){
        box.shapeColor = "crimson";
        box.bounceOff(block3);
        music.play();
    }

    if(isTouching(block1, box)){
        box.shapeColor = "blue";
        box.bounceOff(block1);
        music.play();
    }

    if(isTouching(block4, box)){
        box.shapeColor = "green";
        box.bounceOff(block4);
        music.play();
    }

    if(isTouching(block2, box)){
        box.shapeColor = "orange";
        box.velocity = 0;
        music.stop();
    }

    //if(isTouching(edges, box)){
        //box.bounceOff();
    //}

    drawSprites();
}
