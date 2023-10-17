class Personaje {
  constructor(posX,posY){
  this.posX = posX;
  this.posY = posY;
  this.miColor = color(0,250,0)
  this.vida= 3;
  }
  
  dibujar(){
    fill(this.miColor);
    rect(this.posX,this.posY,45,160);
    ellipse(this.posX+23,this.posY,55,40);
  }
  teclaPresionada(keyCode){
    if(keyCode == LEFT_ARROW){
      this.moverIzquierda();
    }else if(keyCode == RIGHT_ARROW){
      this.moverDerecha();
    }else if(keyCode == UP_ARROW){
      this.moverArriba();
    }else if(keyCode == DOWN_ARROW){
      this.moverAbajo();
    }
  }
  moverIzquierda(){
    this.posX -= 10;
  }
   moverDerecha(){
    this.posX += 10;
  }
   moverArriba(){
    this.posY -=10;
  }
   moverAbajo(){
    this.posY +=10;
  }
   estadoVida(){
  
  }
  recolectoNota(){
  
  }
  loGolpeoRata(){
  
  }
}
