class Enemigo{
constructor(posX,posY){
  this.posX = posX;
  this.posY = posY;
  this.miColor = color(130);
  this.miColor2 = color(255,192,203);
  this.vida= true;
  }
  
   dibujar(){
     if(this.vida){
       fill(this.miColor);
       ellipse(this.posX,this.posY,25,40);
       fill(this.miColor2);
       rect(this.posX-2,this.posY-30,4,15)
       }
  }
   estadoVida(){
  
  }
   golpeoPersonaje(){
   
   }
   fueraDePantalla(){
   
   }
}
