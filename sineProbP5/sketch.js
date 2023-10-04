let cnv;
let cell = 0; // hold cell number
let sz;
let rc; // row column number
let sclr = 0.5; // to scale the result
function setup() {
  cnv = createCanvas(800, 800);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  noStroke();
  sz = 8;
  rc = floor(cnv.width / sz);
  celloff = 0; ///rc*rc*1;// place where you can have the
  //angleMode(DEGREES);
  frameRate(10);
  textAlign(LEFT, TOP);
  cellsum(12346);
}

function draw() {
  background(255);
  sumsine();
  // scroll it
  celloff += rc * 9; // scroll the numbr of rows
  fill(255, 0, 0);
  textSize(50);
  sz = map(mouseX, 0, width, 5, 50);
  sz = constrain(sz, 8, 80);
  sclr = map(mouseY, 0, height, 0.01, 1.5);
  sclr = constrain(sclr, 0.01, 1.5);
  //text(sclr, 100, 100);
}

function sumsine() {
  cell = celloff; // makes the scrolling effect
  // make grid of cell values
  for (let j = 0; j < rc; j++) {
    for (let i = 0; i < rc; i++) {
      cell = cell + 1;
      // call the function sum the digits of the cell and returns the average
      let funnum = cellsum(cell);
      // multiply that result by the cell number multiplied by some scaler
      let f2 = funnum * (cell * sclr);
      // get a color value by taking the sine of that number
      let clr = map(sin(radians(f2)), -1, 1, 0, 255);

      fill(clr);
      rect(i * sz, j * sz, sz, sz);
    }
  }
}

function cellsum(n) {
  let dig = n.toString().split("");
  let digits = dig.map(Number);
  //print(digits)
  let sd = digits.reduce((a, b) => a + b, 0);
  //print(sd)
  let avrg = sd / digits.length;
  // sum the digits and return the average
  return avrg;
}
