/****************
 * 
 * metodo del juego
 * 
 */


var juego ={
    teclado: function(){
/****
 * eventos del teclado
 */

document.addEventListener("keydown",juego.oprimir);
document.addEventListener("keyup",juego.soltar);

    },

    oprimir: function(tecla){

        /**
         * oprimir tecla
         */

tecla.preventDefault();

if(tecla.keyCode == 37){datos.izquierda = true;}
if(tecla.keyCode == 39){datos.derecha = true;}
if(tecla.keyCode == 38){datos.salto = true;}


    },

soltar: function(tecla){

/**
 * soltar tecla
 */

 if(tecla.keyCode == 37){datos.izquierda = false};
 if(tecla.keyCode == 39){datos.derecha = false}; 
    if(tecla.keyCode == 38){datos.salto = false;}


},

tiempo: function(){

/**=============================================
  canvas
 ==============================================*/

lienzo.canvas();


/**=============================================
  Movimiento horizontal
 ==============================================*/

 datos.desplazamientoEscenario += datos.movimiento;
 console.log("datos.desplazamientoescenario",datos.desplazamientoEscenario);

 
/**=============================================
  Movimiento izquierda
 ==============================================*/

if(datos.izquierda)
{
datos.movimiento = datos.velocidad;
}


 
/**=============================================
  Movimiento derecha personaje
 ==============================================*/

 if(datos.derecha)
 {
 datos.movimiento = -datos.velocidad;
 }

 
if(!datos.izquierda && !datos.derecha){
    datos.movimiento=0;
}

/**=============================================
  Ejecutando linea de tiempo
 ==============================================*/


    animacion = frame(juego.tiempo);


}



}