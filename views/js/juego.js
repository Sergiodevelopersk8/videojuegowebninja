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
if(tecla.keyCode==37){
    datos.izquierda=true;}

    if(tecla.keyCode==39)
    {datos.derecha=true;}


    },

soltar: function(tecla){

/**
 * soltar tecla
 */

 if(tecla.keyCode==37){
    datos.izquierda=false;}

    if(tecla.keyCode==39)
    {datos.derecha=false;}


},

tiempo: function(){

lienzo.canvas();
    animacion = frame(juego.tiempo);


}



}