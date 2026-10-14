let x = 0;
function setup() {
  createCanvas(400, 400);
   
}

function draw() {
 background(220);
 
  ellipse(x,200,50,50); // circle moves horizontally x-axis
  x+= 2; // update the x by 2
  if(x>width){
    x=0; //reset x position
  }
}