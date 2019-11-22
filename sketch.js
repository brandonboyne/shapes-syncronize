let x = 1;
let y = 1;
let rSlider, gSlider, bSlider;

function setup() {
  createCanvas(710, 400, WEBGL);
  ambientLight(60, 60, 60);

  textSize(15);
  noStroke();


  rSlider = createSlider(0, 255, 0);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 0);
  bSlider.position(20, 80);


  ;

}



pointLight(255, 255, 255, locX, locY, 100);

function draw() {
  background(0);
  rotateY(frameCount * 0.02);
  orbitControl();

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);




  for (let j = 0; j < 6; j++) {
    push();
    for (let i = 0; i < 200; i++) {
      translate(
        sin(frameCount * 1 + j) * 100,
        sin(frameCount * 1 + j) * 100,
        i * 0.1
      );
      rotateZ(frameCount * 0.004);
      normalMaterial();
      push();
      box(6, 9, 5);
      pop();
    }
    pop();



  }

}