let objJuego;

function setup() {
  createCanvas(600,600);
  objJuego = new Juego(5);
}


function draw() {
  objJuego.dibujar();
}

function keyPressed(){
  objJuego.teclaPresionada(keyCode);
}

function preload(){


}
