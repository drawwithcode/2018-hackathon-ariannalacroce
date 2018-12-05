var mic;
var myImage;
var myImage1;
var myImage2;
var myImage3;
var myImage4;

var mySnow = [];

function preload(){
  myImage = loadImage('./assets/cake.png');
  myImage1 = loadImage('./assets/cand1.png');
  myImage2 = loadImage('./assets/cand2.png');
  myImage3 = loadImage('./assets/cand3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();

  for (var i=0; i<300; i++){
  var b = new Snow(random(width), random(height), random(2, 10));
  mySnow.speed = random(1,10);
  mySnow.push(b);}
}

function draw() {

  background(0, 104, 139);
  var vol = mic.getLevel();
  image(myImage,windowWidth/4-20, windowHeight/3, myImage.width, myImage.height);
  image(myImage1,myImage.width+20, myImage.height-65, myImage1.width/4, myImage1.height/4);
  image(myImage2,myImage.width-40, myImage.height-45, myImage2.width/4, myImage2.height/4);
  image(myImage3,myImage.width-130, myImage.height-70, myImage3.width/4, myImage3.height/4);

  fill(255, 218, 0);
  noStroke();
  ellipse(myImage.width+33, myImage.height-95, vol*450, vol*600);
  ellipse(myImage.width-30, myImage.height-85, vol*450, vol*600);
  ellipse(myImage.width-110, myImage.height-100, vol*450,vol*600);

  push();
  fill(255, 218, 0,60);
  noStroke();
  ellipse(myImage.width+33, myImage.height-93, vol*250,vol*450);
  ellipse(myImage.width-30, myImage.height-83, vol*250,vol*450);
  ellipse(myImage.width-110, myImage.height-97, vol*250,vol*450);
  pop();

  textAlign(CENTER);
  textSize(50);
  textFont('Amatic SC');
  text('make noise to light and flame the birthday candles', windowWidth/2-20, windowHeight/1.3);
  push();
  textSize(40);
  text('use only the vertical screen', windowWidth/2-20, windowHeight/1.2);
  pop();

  push();
  fill(222, 125, 1,70);
  noStroke();
  ellipse(myImage.width+33, myImage.height-93, vol*250,vol*850);
  ellipse(myImage.width-30, myImage.height-83, vol*250,vol*850);
  ellipse(myImage.width-110, myImage.height-97, vol*250,vol*850);
  pop();

  push()
  stroke(0);
  line(myImage.width+33, myImage.height-90, myImage.width+33, myImage.height-50);
  line(myImage.width-30, myImage.height-83, myImage.width-30, myImage.height-40);
  line(myImage.width-110, myImage.height-97, myImage.width-110, myImage.height-60);
  pop()

  for(var i=0; i<mySnow.length; i++){
    mySnow[i].move();
    mySnow[i].display();
  }
}

function Snow(_x, _y, _diameter) {
  this.size = _diameter;
  this.x = _x;
  this.y = _y;

  this.color = 'orangered';
  this.speed = 2;

  this.move = function() {
     this.y += this.speed;
  }

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
    noStroke();
  }
}
