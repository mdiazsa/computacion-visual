void setup() {
  // creamos la ventana por la cual veremos el cubo en 3D
  size(600, 600, P3D);
}

void draw() {
  // establecemos el fondo en el que vamos a trabajar
  background(30);
  lights();
 
  // creamos unas variables que cambien respecto al recuento de frames

  float angle = frameCount * 0.01;
  
  // en este par de variables usamos seno para que oscile, sino, el cubo se saldría de la pantalla o crecería (o decrecería) indefinidamente
  float waveX = sin(frameCount * 0.02) * 150;
  float scaleFactor = abs(sin(frameCount * 0.05));

  //aplicamos dos traslaciones, unaconstante para centrar el objeto en la camara y otra que oscila para ir moviendolo en el eje X
  translate(width/2, height/2, 0);
  translate(waveX, 0, 0);

  pushMatrix();
    //rotamos y escalamos
    rotateZ(angle);
    scale(scaleFactor);
    
    // le damos color y bordes al cubo para apreciar mejor las rotaciones
    fill(150, 200, 255);
    stroke(255);
    box(100);
  popMatrix();
}
