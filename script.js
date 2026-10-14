let img; // image 
let y= 0; // animation on x-axis
let vid; //video
let mySound;
let movement; // previously used a reserved keyword
 async function setup() {
  createCanvas(400, 400);
   //load image
  img = await loadImage('media/flower.gif');
   vid = createVideo('media/dino.mp4');
mySound = await loadSound('media/NonaSnoring_WEB.mp3');
   
 

}

function draw() {
 
background(220);
 /// tint('red')
image(img,0,y);
  image(vid.loop(),50,50);
  ///filter(THRESHOLD);
  y+=2;
  if(y>height){
    y =0;
  }
push(); //isolated the animation
  movement = frameCount * 0.02;
  rotate(movement);
  fill("red");
  ellipse(300,200,50);
  pop();
}

function mousePressed(){
    mySound.play();
}