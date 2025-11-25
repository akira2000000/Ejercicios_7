let img;

function setup() {
  let cnv = createCanvas(400, 400);
  
  img = createImg("assets/garfield.png");
  img.position(120, 330); 
  img.style('z-index', '10');
  img.size(90, 90); 
}

function draw() {
  background(255, 0, 255);

  fill(217, 85, 56);
  ellipse(80, 300, 20, 80);

  fill(0)//camisa
  quad(120, 230, 180, 230, 230, 350, 70, 350);

  fill(217, 85, 56);//cabeza
  ellipse(150, 150, 170,180);

  fill(245, 118, 118);//linea de la cabeza
  triangle(120, 65, 190, 65, 150, 100);

  fill(217, 85, 56); //orejas
  triangle(90, 90, 90, 40, 140, 70);
  triangle(170, 70, 230, 40, 215, 90);
  
  fill(245, 118, 188) //nariz
  square(150, 170, 20, 20, 15, 10, 5);
  
  fill(0); //lentes
  square(90, 100, 55, 20, 15, 10, 5);
  square(160, 100, 55, 20, 15, 10, 5);
  rect(140, 130, 20,10);
  rect(70, 130, 20,10);
  rect(210, 130, 20,10);
  
  rect(20, 170, 70,3);//bigotes
  rect(20, 190, 70,3);
  rect(220, 170, 70,3);
  rect(210, 190, 70,3);

  noStroke();
}