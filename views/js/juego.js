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

 if(tecla.keyCode == 37){datos.izquierda = false; datos.imgJugador.src = "views/img/jugador/stop_left.png";}
 if(tecla.keyCode == 39){datos.derecha = false; datos.imgJugador.src = "views/img/jugador/stop_right.png";} 
    if(tecla.keyCode == 38){datos.salto = false;}


},

tiempo: function(){

/**=============================================
  canvas
 ==============================================*/

lienzo.canvas();


/**=============================================
 Ciclo sprite
 ==============================================*/

if(datos.cicloSprite >= 500){
  datos.cicloSprite = 0;
}
else{
  datos.cicloSprite+=20;
}
for(var i =0; i<= datos.cicloSprite; i+=100){
  if(datos.cicloSprite >= i)
  {
    datos.sprite_x = i;
  }
}

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
  Movimiento horizontal plataforma
 ==============================================*/
for (var i=0; i< datos.plataforma.length; i++){
  datos.plataforma[i].x += datos.movimiento;
}

 /**=============================================
  Movimiento horizontal plataforma final
 ==============================================*/



/**=============================================
  Movimiento izquierda
 ==============================================*/

if(datos.izquierda)
{
 // datos.imgJugador.src = "views/img/jugador/run_left.png";

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

  if(datos.gravedad == 0){
    datos.imgJugador.src = "views/img/jugador/run_left.png";
  }

  if(datos.salto && datos.gravedad == 0){
    datos.imgJugador.src = "views/img/jugador/jump_left.png";
  }

}


 
/**=============================================
  Movimiento derecha
 ==============================================*/

 if(datos.derecha)
 {
  //datos.imgJugador.src = "views/img/jugador/run_right.png";
  if(datos.desplazamientoEscenario <= datos.limiteEscenario){

    datos.movimiento=0;
    datos.movimientoJugador = datos.velocidad;

  }
  else{
 datos.movimiento = -datos.velocidad;
 
 
 } 
 if(datos.gravedad == 0){
  datos.imgJugador.src = "views/img/jugador/run_right.png";
}

if(datos.salto && datos.gravedad == 0){
  datos.imgJugador.src = "views/img/jugador/jump_right.png";
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
  Gravedad
 ==============================================*/

datos.jugador_y += datos.gravedad;

if(datos.gravedad < datos.limiteGravedad)
{

datos.gravedad += datos.peso;

}


/**=============================================
Colisiones con plataformas
 ==============================================*/

 for(var i = 0; i < datos.plataforma.length; i++){

function colisionesPlataforma(){
/**no colision pltaforma de arriba hacia abajo */

if((datos.jugador_y + datos.jugador_alto) < datos.plataforma[i].y){
  return false;
}

/**no colision pltaforma de abajo hacia arriba */

if(datos.jugador_y  > ( datos.plataforma[i].y + datos.plataforma[i].alto)){
  return false;
}

/**no colision pltaforma de izquierda hacia derecha */

if((datos.jugador_x + datos.jugador_ancho) <  datos.plataforma[i].x ){
  return false;
}

/**no colision pltaforma de derecha a izquierda */

if(datos.jugador_x  > ( datos.plataforma[i].x + datos.plataforma[i].ancho)){
  return false;
}

  return true;
}

colisionesPlataforma();


/**colision pltaforma de arriba hacia abajo*/


if(colisionesPlataforma() && (datos.jugador_y + datos.jugador_alto) < datos.plataforma[i].y + datos.gravedad){

datos.gravedad = 0;
datos.jugador_y = datos.plataforma[i].y - datos.jugador_alto;

}


/**colision pltaforma de abajo hacia arriba*/


if(colisionesPlataforma() && datos.jugador_y- datos.gravedad > ( datos.plataforma[i].y + datos.plataforma[i].alto)){

  datos.gravedad = 1;
  datos.jugador_y = datos.plataforma[i].y + datos.jugador_alto;
  
  }

if(datos.desplazamientoEscenario <= datos.limiteEscenario){

/**colision pltaforma de izquierda a derecha*/

if(colisionesPlataforma() && (datos.jugador_x + datos.jugador_ancho) < datos.plataforma[i].x + datos.movimientoJugador){

  datos.movimientoJugador = 0;
  datos.jugador_x = datos.plataforma[i].x - datos.jugador_ancho;
  
  }
  
  
    /**colision pltaforma de  derecha a izquierda*/
  
    if(colisionesPlataforma() && datos.jugador_x + datos.movimientoJugador > (datos.plataforma[i].x + datos.plataforma[i].ancho)){
  
      datos.movimientoJugador = 0;
      datos.jugador_x = datos.plataforma[i].x + datos.plataforma[i].ancho;
      
      }
      
  


}

else{

  
  /**colision pltaforma de izquierda a derecha*/

if(colisionesPlataforma() && (datos.jugador_x + datos.jugador_ancho) < datos.plataforma[i].x - datos.movimiento){

  datos.movimiento = 0;
  datos.jugador_x = datos.plataforma[i].x - datos.jugador_ancho;
  
  }
  
  
    /**colision pltaforma de  derecha a izquierda*/
  
    if(colisionesPlataforma() && datos.jugador_x + datos.movimiento > (datos.plataforma[i].x + datos.plataforma[i].ancho)){
  
      datos.movimiento = 0;
      datos.jugador_x = datos.plataforma[i].x + datos.plataforma[i].ancho;
      
      }
      
  

}

/**=============================================
  salto
 ==============================================*/

if(datos.salto && datos.gravedad == 0 && datos.jugador_y == datos.plataforma[i].y - datos.jugador_alto){
  datos.gravedad = datos.alturaSalto;
}

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
var puntaje = "200";
var numeroNivel = datos.nivel;
var id = datos.id;
var url="views/ajax/usuarios.php";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send("nivel=" + nivel + "& puntaje=" + puntaje + "& numeroNivel=" + numeroNivel + "& id=" + id);

xhr.onreadystatechange = function(){

  if((xhr.readyState == 4) && (xhr.status == 200)){
    console.log("resultado", xhr.responseText);
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

http://localhost/phpmyadmin



*/ 