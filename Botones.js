function dibujaBotonRectangular(x, y, ancho, alto, texto) {
  // Establecer colores para el botón
  //Colores para los diferentes estados del mismo segun interaccion:
  let fondo = color(179, 183, 153, 150);
  let borde = color(100);

  // Dibuja el fondo del botón
  if (colisionConBotonRectangular(x, y, ancho, alto)) {
  } else {
    fill(fondo);
  }
  stroke(borde);
  rectMode(CENTER);
  rect(x, y, ancho, alto);

  // Dibujar el texto dentro del botón
  fill(0); // Establecer color negro para el texto
  textAlign(CENTER, CENTER); // Alinear el texto al centro del botón
  textSize(18); // Tamaño del texto
  text(texto, x, y); // Posicionar el texto en el centro del botón
}

//Establecemos la colision del boton:
function colisionConBotonRectangular(x,y,ancho,alto ) {
  return( mouseX>x-ancho/2 && mouseX<x+ancho/2 && mouseY>y-alto/2 && mouseY<y+alto/2 );  
}
