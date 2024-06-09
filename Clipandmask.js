let img;

function preload(){
  img=loadImage("sunflower.jpg")
}

function setup() {
  createCanvas(700, 700);
  background(190,220,250);
  
  //image inside shape, using clip function - only works with one shape
  img.resize(200,200);
  let cnv7 = createGraphics(200,200); // creating a sub canvas aside from the main canvas 
  cnv7.circle(100,100,190);
  cnv7.canvas.getContext("2d").clip(); // getting the conditions / all the things that we will put 
  cnv7.image(img,0,0); //positioning the image 
  image(cnv7,350,225); // putting the sub canvas inside the main canvas 
  
}
