var a = 0;
var r = 2;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  background("#1A2227");

}

function draw() {

  pink = (lerpColor(color("#1A2227"), color("#DB3082"), frameCount / 720 ));
  blue = (lerpColor(color("#1A2227"), color("#6983aa"), frameCount / 720 ));
  green = (lerpColor(color("#1A2227"), color("#679b9b"), frameCount / 720 ));
  white = (lerpColor(color("#1A2227"), color("white"), frameCount / 720 ));

  var x = r * cos(a);
  var y = r * sin(a);


  a += 0.1;
  r += 1;

  strokeWeight(0.5);
  stroke("#1A2227")

  //ellipse(x, y, frameCount/1.5, frameCount/2);//
  //line(x, y, 50, 50);

  push()

  fill(blue);
  translate(770, 370);
  rotate(frameCount*2);
  ellipse(x, y, frameCount/5, frameCount/4);

  if (frameCount == 750){
  noLoop()
  }

  pop()


  push()

  fill(pink);
  translate(285, -15);
  rotate(frameCount*2);
  ellipse(x, y, frameCount/5, frameCount/4);

  pop()


  push()
  fill(green);
  translate(1450, 400);
  rotate(frameCount*2);
  ellipse(x, y, frameCount/5, frameCount/4);

  pop()


  push()

  fill(white);
  translate(275, 860);
  rotate(frameCount*2);
  ellipse(x, y, frameCount/5, frameCount/4);

  pop()

}
