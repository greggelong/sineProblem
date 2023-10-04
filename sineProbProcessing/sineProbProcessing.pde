long cell=0;
long cellmult;
float sz;
int rc;
//int frames;
int celloff=0;
void setup() {
  size(1000, 1000);
  sz = 5;
  background(0);
  rc=floor(width/sz);
  //frameRate(14);
  noStroke();
  celloff =rc*rc*9; // set start place
  
}

void draw() {


  cubo();
  //frames++;
  celloff+=rc*1; // how many rows it will scroll
  // limit the number of frames to 45
  //frames=frames%45;
  fill(0);
  if(frameCount%25==0){
    println(cellmult,cell,sin(radians(cellmult)));
  }  //textSize(70);
  //text(celloff, 100, 100);
  if (celloff>rc*rc*25) { //squared grid *45frames
     celloff =rc*rc*9;
  }
}

void cubo() {
  cell = celloff;
  for (int j =0; j<rc; j++) {

    for (int i = 0; i<rc; i++) {

      cell=cell+1;
      // cube val of cell num
      cellmult = cell*cell*cell;

      // map the sine of that to a color val
      float c4 = map(sin(radians(cellmult)), -1, 1, 0, 255);

      fill(c4, c4, 255-c4);
      rect(i*sz, j*sz, sz, sz);
    }
  }
}
