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

  fill(blue);
  strokeWeight(0.5);
stroke("#1A2227")

  var x = r * cos(a);
  var y = r * sin(a);


  a += 0.1;
  r += 1;

  push()
  translate(windowWidth/1.7, windowHeight/1.9);
  rotate(frameCount*2);

  //ellipse(x, y, frameCount/1.5, frameCount/2);//
  ellipse(x, y, frameCount/5, frameCount/4);


  if (frameCount == 741){
noLoop()


  //line(x, y, 50, 50);



  }

    pop()


    push()

      translate(70, 30);
fill(pink);

rotate(frameCount*2);

ellipse(x, y, frameCount/5, frameCount/4);



  pop()

  push()
  fill(green);
  translate(windowWidth + 20, windowHeight/2);
  rotate(frameCount*2);

  //ellipse(x, y, frameCount/1.5, frameCount/2);//
  ellipse(x, y, frameCount/5, frameCount/4);


pop()

push()
fill(white);
translate(windowWidth/5.4, windowHeight + 151);
rotate(frameCount*2);

//ellipse(x, y, frameCount/1.5, frameCount/2);//
ellipse(x, y, frameCount/5, frameCount/4);




  pop()


}
