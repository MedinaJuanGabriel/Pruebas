var estado=0;
let fondos = [];
let tumbi = [];
// Variables generales del juego
let enemigoImg;
let fantisImg;
// Variables del jugador/personaje
let posX = 450;
let posY = 350;
let velocidad = 5;
let velocidadX = 0;
let velocidadY = 0;
let cuadroActual = 0;

// Variables relacionadas con el recolectable "Fantis"
let posXFantis;
let posYFantis;
let contadorFantis = 0;
let velocidadFantis = 1;
let rangoVerticalFantis = [0, 100];

let demobalas = [];
let velocidadDemobalas = [2, 4];


function preload() {
  // Carga de imágenes
   for (let i = 0; i < 5; i++) {
    fondos[i] = loadImage("assets/fondo" + nf(i, 2) + ".png");
  }
  let imagenesTumba = [];
  for (let i = 0; i < 8; i++) {
    tumbi[i] = loadImage("assets/tumba" + nf(i, 2) + ".png");
  }
  enemigoImg = loadImage("assets/enemigo.png");
  fantisImg = loadImage("assets/fantis.png");
}
function setup() {
  createCanvas(600, 600);
  
  generarDemobalas();
  generarFantis();
  }

function draw() {
    if (estado === 0) {
    // Pantalla de inicio
   pantallainicio();
    }
  else if (estado === 1) {
    // Pantalla de juego
    image(fondos[1], 0, 0);
  image(tumbi[cuadroActual], posX, posY);
  // Mueve y muestra a los obstáculos "Demobalas"
  moverDemobalas();
  mostrarDemobalas();
moverJugador();
  // Mueve y muestra a los recolectables "Fantis"
  moverFantis();
  image(fantisImg, posXFantis, posYFantis, 50, 60);

  // Verifica interacciones
  verificarFantis();
  verificarColision();

  // Muestra el contador en la esquina superior derecha
  fill(255);
  textSize(24);
  text(`Recolectables: ${contadorFantis}`, width - 100, 30);

  // Verifica la condición de victoria
  if (contadorFantis >= 13) {
    victoria();
  }
  } else if (estado === 2) {
    // Pantalla de "perdió"
       image(fondos[2], 0, 0);
  } else if (estado === 3) {
    // Pantalla de "gano"
       image(fondos[3], 0, 0);
  } else if (estado === 4) {
    // Pantalla de "creditos"
    image(fondos[4], 0, 0);
    pantallacreditos();
  } else if (estado === 5){
    image(fondos[5], 0, 0);
   pantallainstruc();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    velocidadX = -velocidad;
    cuadroActual = 7;
  } else if (keyCode === RIGHT_ARROW) {
    velocidadX = velocidad;
    cuadroActual = 5;
  } else if (keyCode === UP_ARROW) {
    velocidadY = -velocidad;
    cuadroActual = 3;
  } else if (keyCode === DOWN_ARROW) {
    velocidadY = velocidad;
    cuadroActual = 1;
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
    velocidadX = 0;
    velocidadY = 0;
    cuadroActual = 0;
  }
}

// Funciones relacionadas con los obstáculos "Demobalas"
function generarDemobalas() {
  for (let i = 0; i < 3; i++) {
    let x = random(0, 570);
    let y = random(0, 200);
    let velocidad = random(velocidadDemobalas[0], velocidadDemobalas[1]);
    demobalas.push({ x, y, velocidad });
  }
}

function moverDemobalas() {
  for (let i = demobalas.length - 1; i >= 0; i--) {
    demobalas[i].y += demobalas[i].velocidad;
    if (demobalas[i].y > height) {
      demobalas.splice(i, 1);
      regenerarDemobala();
    }
  }
}

function mostrarDemobalas() {
  for (let obs of demobalas) {
    image(enemigoImg, obs.x, obs.y);
  }
}

function regenerarDemobala() {
  let x = random(0, 570);
  let y = random(-200, -10);
  let velocidad = random(velocidadDemobalas[0], velocidadDemobalas[1]);
  demobalas.push({ x, y, velocidad });
}

// Funciones relacionadas con los recolectables "Fantis"
function generarFantis() {
  posXFantis = random(0, 570);
  posYFantis = random(-50, -10);
}

function moverFantis() {
  posYFantis += velocidadFantis;

  // Verifica si el "Fantis" llega abajo de la pantalla y lo regenera
  if (posYFantis > height) {
    generarFantis();
  }
}

// Funciones para verificar interacciones
function verificarFantis() {
  let d = dist(posX, posY, posXFantis, posYFantis);
  if (d < 20) {
    contadorFantis++;
    generarFantis();
  }
}

function verificarColision() {
  for (let obs of demobalas) {
    if (posX + enemigoImg.width > obs.x && posX < obs.x + enemigoImg.width && posY + enemigoImg.height > obs.y && posY < obs.y + enemigoImg.height) {
      finDelJuego();
    }
  }
}

// Funciones para el final del juego
function finDelJuego() {
  background(255, 0, 0);
  textSize(32);
  fill(255);
  text('Game Over', width / 2, height / 2);
  noLoop();
}

function victoria() {
  background(0, 255, 0);
  textSize(32);
  fill(255);
  text('¡Victoria!', width / 2, height / 2);
  noLoop();
}
