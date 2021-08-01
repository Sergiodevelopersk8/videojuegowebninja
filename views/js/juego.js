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
 //console.log("datos.desplazamientoescenario",datos.desplazamientoEscenario);

 
/**======================================
 Movimiento horizontal jugador
 * ======================================
 */

 if(datos.desplazamientoEscenario <= datos.limiteEscenario){
datos.jugador_x += datos.movimientoJugador;
 }


/**=============================================
  Movimiento izquierda
 ==============================================*/

if(datos.izquierda)
{
  if(datos.desplazamientoEscenario >=  0){
    datos.movimiento=0;
  }
  else if(datos.desplazamientoEscenario <= datos.limiteEscenario){
if(datos.jugador_x <=70){
datos.movimiento = datos.velocidad;
}
else{
  datos.movimiento=0;
  datos.movimientoJugador = -datos.velocidad;
}
  }
  else{
datos.movimiento = datos.velocidad;
  }
}


 
/**=============================================
  Movimiento derecha
 ==============================================*/

 if(datos.derecha)
 {
  if(datos.desplazamientoEscenario <= datos.limiteEscenario){

    datos.movimiento=0;
    datos.movimientoJugador = datos.velocidad;

  }
  else{
 datos.movimiento = -datos.velocidad;
 } 
}

 
if(!datos.izquierda && !datos.derecha){
    datos.movimiento=0;
}

/**=============================================
 Deteniendo movimiento escenario y movimiento jugador
 ==============================================*/

if(!datos.izquierda && !datos.derecha)
{
  datos.movimiento=0;
  datos.movimientoJugador=0;
}


/**=============================================
  Ejecutando linea de tiempo
 ==============================================*/


    animacion = frame(juego.tiempo);



/**=============================================
  Final del nivel
 ==============================================*/

 if(datos.jugador_x >= 950)
 {

cancelAnimationFrame(animacion);
var xhr = new XMLHttpRequest();
var nivel = "ok";
var puntaje="200";
var numeroNivel = datos.nivel;
var id = datos.id;
var url="views/ajax/usuarios.php";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send("nivel=" + nivel + "& puntaje" + puntaje + "& numeroNivel=" + numeroNivel + "& id=" + id);
xhr.onreadystatechange = function(){

  if((xhr.readyState == 4) && (xhr.status == 200)){
    
if(xhr.responseText =="ok"){

  
  window.location="inicio";
}

  }
}


 }



}



}

/*

brave://settings/?search=borrar

opera://settings/clearBrowserData

*/ 