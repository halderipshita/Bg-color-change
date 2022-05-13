
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
box.shapeColor = "black"
}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    box.x -=2
    background("orange");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.y -=2
    background("yellow");
   
  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.x +=2
    background("purple");
   
  }
  if (keyIsDown(DOWN_ARROW)) 
  {
    box.y +=2
    background("green");
  }


  
  drawSprites();
}

