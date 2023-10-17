class Recolectable{
 constructor(){
  this.posX= 200;
  this.posY= 20;
  this.miColor = color(200,200,0);
  } 
   dibujar(){
    fill(this.miColor);
    ellipse(this.posX,this.posY,20,20);
    ellipse(this.posX+15,this.posY,20,20);
  }
  
   recolectoPersonaje(){
   
   }
   
   fueraDePantalla(){
   
   }
}
