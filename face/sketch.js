function setup() {
  createCanvas(800, 800);
}
abc=0;
toggle=1; 
function draw() {
  fill(255,251,0)
  background(220);
  strokeWeight(5);
  abc = mouseX + 100
    
  
  circle(400, 400, 400);
  fill(255,0,0)
  arc(400, 400, 300, 300, 0, PI);
  fill(255,255,255)
  arc(300, 350, 80, 80, 0, PI + PI);
  arc(500, 350, 80, 80, 0, PI + PI);
  fill(0,0,0)
  arc(300, 350, 80, 80, 0, PI + HALF_PI);
  arc(500, 350, 80, 80, 0, PI + HALF_PI);
  stroke(255,0,0)
  strokeWeight(5);
  line(500,350,abc,mouseY)
  line(300,350,abc-200,mouseY)
  stroke(0,0,0)
  //ellipse(50, 50, 80, 80);
  //line(50,50,350,100);
  //triangle(300, 750, 580, 200, 860, 750);
}