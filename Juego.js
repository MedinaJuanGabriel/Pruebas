class Juego{
  constructor(cantidadEnemigos){
    this.crearPersonaje();
    this.cantidadEnemigos = cantidadEnemigos;
    this.crearEnemigos();
    this.crearRecolectables();
   }
  dibujar(){
  this.personaje.dibujar();
  for(let i=0; i<this.cantidadEnemigos;i++){
    this.enemigos[i].dibujar();
  }
  for(let i=0; i<3;i++){
    this.recolectables[i].dibujar();
  }
  }
  
  iniciar(){
  
  }
  
  crearEnemigos(){
   this.enemigos = [];
   for(let i=0; i<this.cantidadEnemigos;i++){
     this.enemigos[i] = new Enemigo(i*40,100);
  }
  }
  
  crearRecolectables(){
   this.recolectables = [];
   for(let i=0; i<3;i++){
     this.recolectables[i] = new Recolectable();
  }
  }
  
  crearPersonaje(){
   this.personaje = new Personaje(width/2,300);
  }
  
  personajeGana(){
    
  }
  
  personajePierde(){
    
  }
  
  teclaPresionada(keyCode){
    this.personaje.teclaPresionada(keyCode);
  }
} 
