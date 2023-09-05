// Funciones relacionadas con el jugador/personaje
function moverJugador() {
  posX += velocidadX;
  posY += velocidadY;

  // Limita el movimiento horizontal del personaje entre 0 y 570
  if (posX < 0) {
    posX = 0;
  } else if (posX > 570) {
    posX = 570;
  }

  // Limita el movimiento vertical del personaje entre 300 y 400
  if (posY < 300) {
    posY = 300;
  } else if (posY > 400) {
    posY = 400;
  }
}
