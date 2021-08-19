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
  Movimiento horizontal Monedas
 ==============================================*/
 for (var i=0; i< datos.posMonedas.length; i++){
  datos.posMonedas[i].x += datos.movimiento;
}

 /**=============================================
  Movimiento horizontal monedas
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


if(colisionesPlataforma() && datos.jugador_y - datos.gravedad > ( datos.plataforma[i].y + datos.plataforma[i].alto)){

  datos.gravedad = 1;
  datos.jugador_y = datos.plataforma[i].y + datos.plataforma[i].alto;
  
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
  Colisiones con monedas
 ==============================================*/
for(var i = 0; i< datos.posMonedas.length; i++){
  function colisionesMonedas(){

/*No colisiones con monedas de arriba hacia abajo*/
if((datos.jugador_y + datos.jugador_alto) <  datos.posMonedas[i].y){return false;}

/**No colisiones con monedas de abajo hacia arriba */

if(datos.jugador_y > (datos.posMonedas[i].y + datos.posMonedas[i].alto)){return false;}

/**No colisiones con monedas de izquierda a derecha */

if((datos.jugador_x + datos.jugador_ancho) < datos.posMonedas[i].x){return false;}

/**No colisiones con monedas de derecha a izquierda */

if(datos.jugador_x > (datos.posMonedas[i].x + datos.posMonedas[i].ancho)) {return false;}



return true;

  }
  colisionesMonedas();

if(colisionesMonedas()){
  datos.imgMonedas[i].src="views/img/utileria/colisionesMonedas.png";
  datos.posMonedas[i].y--;
  var monedasColisionadas = i;
setTimeout(function(){
  datos.posMonedas[monedasColisionadas].x = -500;
  datos.posMonedas[monedasColisionadas].y = -500;
}, 500)

}


}



 
/**=============================================
  Caida del jugador por fuera del escenario
 ==============================================*/

 if(datos.jugador_y > 500){
   datos.reset = true;

 }

 
/**=============================================
  resetear nivel
 ==============================================*/

if(datos.reset == true){

datos.reset = false;
datos.gravedad = 0;
datos.desplazamientoEscenario = 0;
datos.movimiento = 0;
datos.jugador_y = 200;
datos.jugador_x = 70;


/**Reinicio de plataformas */


if(datos.nivel == 1){

  var xhr_plataforma = new XMLHttpRequest();
  xhr_plataforma.open("GET", "views/js/json/plataformasNivel1.json", true)

}

if(datos.nivel == 2){

 var xhr_plataforma = new XMLHttpRequest();
 xhr_plataforma.open("GET", "views/js/json/plataformasNivel2.json", true)  

}

if(datos.nivel == 3){

     var xhr_plataforma = new XMLHttpRequest();
   xhr_plataforma.open("GET", "views/js/json/plataformasNivel3.json", true)
}

xhr_plataforma.send();

xhr_plataforma.onreadystatechange = function(){

 if ((xhr_plataforma.readyState == 4)&&(xhr_plataforma.status == 200)){

   datos.plataforma = JSON.parse(xhr_plataforma.responseText)

 }
}


/**resetear monedas */
if(datos.nivel == 1){

	var xhr_monedas = new XMLHttpRequest();
	xhr_monedas.open("GET", "views/js/json/monedasNivel1.json", true)

}

if(datos.nivel == 2){

   var xhr_monedas = new XMLHttpRequest();
   xhr_monedas.open("GET", "views/js/json/monedasNivel2.json", true)  

}

if(datos.nivel == 3){

	 var xhr_monedas = new XMLHttpRequest();
	 xhr_monedas.open("GET", "views/js/json/monedasNivel3.json", true)
}

xhr_monedas.send();
xhr_monedas.onreadystatechange = function(){

   if ((xhr_monedas.readyState == 4)&&(xhr_monedas.status == 200)){

	   datos.posMonedas = JSON.parse(xhr_monedas.responseText)

	   for(var i =0; i< datos.posMonedas.length; i++){
		   datos.imgMonedas[i] = new Image();
		   datos.imgMonedas[i].src="views/img/utileria/monedas.png";
	   }

   }
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