function pantallainicio(){
    
    image(fondos[0], 0, 0);
    dibujaBotonRectangular( width/2, height/3, 200, 80, "JUGAR");
    dibujaBotonRectangular( width/2, height/2, 200, 80, "CREDITOS");
    dibujaBotonRectangular( 300, 400, 200, 80, "INSTRUCCIONES");
if (estado == 0) {
    if (colisionConBotonRectangular(width/2, height/3, 200, 80)) {
      console.log("CLICK en boton de jugar");
      estado = 1;
    } else if (colisionConBotonRectangular(width/2, height/2, 200, 80)) {
      console.log("CLICK en boton de creditos");
      estado = 4;
    } else if (colisionConBotonRectangular(300, 400, 200, 80)) {
      console.log("CLICK en boton de instrucciones");
      estado = 5;
 } 
}
}
