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
if(tecla.keyCode == 32){datos.disparo = true; datos.disparo_y = datos.jugador_y; datos.movDisparoJugador=0;

  datos.imgDisparoJugador.src="views/img/utileria/balasJugador.png";
  datos.disparo_ancho = 15;
  datos.disparo_alto = 15;}
},

soltar: function(tecla){

/**
 * soltar tecla
 */

 if(tecla.keyCode == 37){datos.izquierda = false; datos.imgJugador.src = "views/img/jugador/stop_left.png";}
 if(tecla.keyCode == 39){datos.derecha = false; datos.imgJugador.src = "views/img/jugador/stop_right.png";} 
    if(tecla.keyCode == 38){datos.salto = false;}

    if(tecla.keyCode == 32){datos.disparo = false;}

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
 Ciclo Trampas
 ==============================================*/

if(datos.movTrampas <= 0){datos.cambioMovTrampas = false;}

if(datos.movTrampas >= 100){datos.cambioMovTrampas = true;}
if(!datos.cambioMovTrampas){datos.movTrampas++;}
else{datos.movTrampas--;}


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
  Movimiento horizontal trampas
 ==============================================*/

 for( var i = 0; i < datos.posTrampas.length; i++){
   datos.posTrampas[i].x += datos.movimiento;
 }


 /**=============================================
  Movimiento horizontal enemigos
 ==============================================*/

 for( var i = 0; i < datos.posEnemigos.length; i++){
  datos.posEnemigos[i].x += datos.movimiento;
}

/**=============================================
  Movimiento horizontal enemigos
 ==============================================*/

 for( var i = 0; i < datos.posBalasEnemigos.length; i++){
  datos.posBalasEnemigos[i].x += datos.movimiento;
}


/**=============================================
  Movimiento izquierda
 ==============================================*/

if(datos.izquierda)
{

  datos.direccionJugador = "izquierda"

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
datos.direccionJugador = "derecha";

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
  datos.activarMonedaColisionada = true;
 datos.monedaColisionada = i;
 datos.posicionMonedaColisionadaX = datos.posMonedas[i].x;
 datos.posicionMonedaColisionadaY = datos.posMonedas[i].y;
  datos.posMonedas[i].x = -500;
  datos.posMonedas[i].y = -500;
  datos.contadorMonedas += 10;
  document.querySelector('#monedas span').innerHTML = datos.contadorMonedas;



}


}



/**=============================================
  Colisiones con trampas
 ==============================================*/
 for(var i = 0; i< datos.posTrampas.length; i++){
  function colisionesTrampas(){

/*No colisiones con monedas de arriba hacia abajo*/
if((datos.jugador_y + datos.jugador_alto) <  datos.posTrampas[i].y + datos.movTrampas){return false;}

/**No colisiones con monedas de abajo hacia arriba */

if(datos.jugador_y > (datos.posTrampas[i].y + datos.movTrampas + datos.posTrampas[i].alto)){return false;}

/**No colisiones con monedas de izquierda a derecha */

if((datos.jugador_x + datos.jugador_ancho) < datos.posTrampas[i].x){return false;}

/**No colisiones con monedas de derecha a izquierda */

if(datos.jugador_x > (datos.posTrampas[i].x + datos.posTrampas[i].ancho)) {return false;}



return true;

  }
  colisionesTrampas();

if(colisionesTrampas()){

  datos.imgTrampas[i].src="views/img/utileria/colisionesTrampas.png";
 datos.imgJugador.src = "views/img/jugador/colision_trampa.png";
datos.energia--;
document.querySelector("#energia meter").value = datos.energia;
document.querySelector("#energia span").innerHTML = datos.energia + "%"; 

if(datos.energia <= 0){
  datos.reset = true;
}


}
else{
  datos.imgTrampas[i].src="views/img/utileria/trampas.png";
}

}



/**=============================================
Colisiones con enemigos
 ==============================================*/

 for(var i = 0; i < datos.posEnemigos.length; i++){

  function colisionesEnemigos(){
  /**no colision pltaforma de arriba hacia abajo */
  
  if((datos.jugador_y + datos.jugador_alto) < datos.posEnemigos[i].y){
    return false;
  }
  
  /**no colision pltaforma de abajo hacia arriba */
  
  if(datos.jugador_y  > ( datos.posEnemigos[i].y + datos.posEnemigos[i].alto)){
    return false;
  }
  
  /**no colision pltaforma de izquierda hacia derecha */
  
  if((datos.jugador_x + datos.jugador_ancho) <  datos.posEnemigos[i].x ){
    return false;
  }
  
  /**no colision pltaforma de derecha a izquierda */
  
  if(datos.jugador_x  > ( datos.posEnemigos[i].x + datos.posEnemigos[i].ancho)){
    return false;
  }
  
    return true;
  }
  
  colisionesEnemigos();
  
  
  /**colision pltaforma de arriba hacia abajo*/
  
  
  if(colisionesEnemigos() && (datos.jugador_y + datos.jugador_alto) < datos.posEnemigos[i].y + datos.gravedad){
  
  datos.gravedad = 0;
  datos.jugador_y = datos.posEnemigos[i].y - datos.jugador_alto;
  
  }
  
  
  /**colision pltaforma de abajo hacia arriba*/
  
  
  if(colisionesEnemigos() && datos.jugador_y - datos.gravedad > ( datos.posEnemigos[i].y + datos.posEnemigos[i].alto)){
  
    datos.gravedad = 1;
    datos.jugador_y = datos.posEnemigos[i].y + datos.posEnemigos[i].alto;
    
    }
  
  if(datos.desplazamientoEscenario <= datos.limiteEscenario){
  
  /**colision pltaforma de izquierda a derecha*/
  
  if(colisionesEnemigos() && (datos.jugador_x + datos.jugador_ancho) < datos.posEnemigos[i].x + datos.movimientoJugador){
  
    datos.movimientoJugador = 0;
    datos.jugador_x = datos.posEnemigos[i].x - datos.jugador_ancho;
    
    }
    
    
      /**colision pltaforma de  derecha a izquierda*/
    
      if(colisionesEnemigos() && datos.jugador_x + datos.movimientoJugador > (datos.posEnemigos[i].x + datos.posEnemigos[i].ancho)){
    
        datos.movimientoJugador = 0;
        datos.jugador_x = datos.posEnemigos[i].x + datos.posEnemigos[i].ancho;
        
        }
        
    
  
  
  }
  
  else{
  
    
    /**colision pltaforma de izquierda a derecha*/
  
  if(colisionesEnemigos() && (datos.jugador_x + datos.jugador_ancho) < datos.posEnemigos[i].x - datos.movimiento){
  
    datos.movimiento = 0;
    datos.jugador_x = datos.posEnemigos[i].x - datos.jugador_ancho;
    
    }
    
    
      /**colision pltaforma de  derecha a izquierda*/
    
      if(colisionesEnemigos() && datos.jugador_x + datos.movimiento > (datos.posEnemigos[i].x + datos.posEnemigos[i].ancho)){
    
        datos.movimiento = 0;
        datos.jugador_x = datos.posEnemigos[i].x + datos.posEnemigos[i].ancho;
        
        }
        
    
  
  }
  
  /**=============================================
    salto
   ==============================================*/
  
  if(datos.salto && datos.gravedad == 0 && datos.jugador_y == datos.posEnemigos[i].y - datos.jugador_alto){
    datos.gravedad = datos.alturaSalto;
  }
  
   }
  
   /**=============================================
  Ciclo balas enemigos
   ==============================================*/

if(datos.cicloBalasEnemigos >= 5000){
  datos.cicloBalasEnemigos = 0;
}
else{
  datos.cicloBalasEnemigos += 20;
}

for(var i=0; i<=datos.cicloBalasEnemigos; i+=1000){
if(datos.cicloBalasEnemigos >= i){
  datos.cambioBalasEnemigos = true;
  datos.movBalasEnemigos = datos.velocidadBalasEnemigos;
}
if(datos.cicloBalasEnemigos >= i+900){
  datos.cambioBalasEnemigos = false;
  datos.movBalasEnemigos = 0;
}

}


if(datos.cambioBalasEnemigos == true){
 for(var i=0; i < datos.posBalasEnemigos.length; i++){

  datos.posBalasEnemigos[i].x -= datos.movBalasEnemigos;

 }
}
else{
  for(var i=0; i < datos.posBalasEnemigos.length; i++){

    datos.posBalasEnemigos[i].x = datos.posEnemigos[i].x ;
  
   }

}



/**=============================================
  Colisiones con balas enemigos
 ==============================================*/
 for(var i = 0; i< datos.posBalasEnemigos.length; i++){
  function colisionesBalasEnemigos(){

/*No colisiones con monedas de arriba hacia abajo*/
if((datos.jugador_y + datos.jugador_alto) <  datos.posBalasEnemigos[i].y){return false;}

/**No colisiones con monedas de abajo hacia arriba */

if(datos.jugador_y > (datos.posBalasEnemigos[i].y  + datos.posBalasEnemigos[i].alto)){return false;}

/**No colisiones con monedas de izquierda a derecha */

if((datos.jugador_x + datos.jugador_ancho) < datos.posBalasEnemigos[i].x){return false;}

/**No colisiones con monedas de derecha a izquierda */

if(datos.jugador_x > (datos.posBalasEnemigos[i].x + datos.posBalasEnemigos[i].ancho)) {return false;}



return true;

  }
  colisionesBalasEnemigos();

if(colisionesBalasEnemigos()){

  datos.energia--;
document.querySelector("#energia meter").value = datos.energia;
document.querySelector("#energia span").innerHTML = datos.energia + "%"; 

if(datos.energia <= 0){
  datos.reset = true;
}


  datos.imgJugador.src = "views/img/jugador/colision_trampa.png";
  datos.imgBalasEnemigos.src="views/img/utileria/colisionesBalasEnemigos.png";
 
 setTimeout(function(){

  datos.imgJugador.src = "views/img/jugador/stop_right.png";
  datos.imgBalasEnemigos.src="views/img/utileria/balasEnemigos.png";


 }, 100)


}


}



/**=============================================
  Disparo del jugador
 ==============================================*/




if(datos.disparo){

datos.validarDisparo = true;


}

if(datos.validarDisparo == true)
{
  if(datos.direccionJugador == "izquierda"){

    datos.disparoIzq = true;
    datos.disparoDer = false;
  }
  else{

datos.disparoIzq = false;
datos.disparoDer = true;

  }
}

if(datos.disparoIzq == true){
  datos.validarDisparo = false;
  datos.disparo_x = datos.jugador_x + datos.movDisparoJugador;
  datos.movDisparoJugador -= datos.velocidadDisparoJugador;
  if( datos.disparo_x <= -250 || coljuga()){    datos.disparo_y = -500 ;}
}

if(datos.disparoDer == true){
  datos.validarDisparo = false;
  datos.disparo_x = datos.jugador_x + datos.movDisparoJugador;
  datos.movDisparoJugador += datos.velocidadDisparoJugador;
  if(datos.disparo_x > 500 || coljuga() ){  datos.disparo_y = -500;}
}



/**=============================================
  Colisiones balas enemigos con disparo jugador
 ==============================================*/
 function coljuga(){
 for(var i = 0; i< datos.posBalasEnemigos.length; i++){
  function colisionesDisparoJugador(){

/*No colisiones con monedas de arriba hacia abajo*/
if((datos.disparo_y + datos.disparo_alto) <  datos.posBalasEnemigos[i].y){return false;}

/**No colisiones con monedas de abajo hacia arriba */

if(datos.disparo_y > (datos.posBalasEnemigos[i].y  + datos.posBalasEnemigos[i].alto)){return false;}

/**No colisiones con monedas de izquierda a derecha */

if((datos.disparo_x + datos.disparo_ancho) < datos.posBalasEnemigos[i].x){return false;}

/**No colisiones con monedas de derecha a izquierda */

if(datos.disparo_x > (datos.posBalasEnemigos[i].x + datos.posBalasEnemigos[i].ancho)) {return false;}



return true;

  }
  colisionesDisparoJugador();

if(colisionesDisparoJugador()){
 datos.imgDisparoJugador.src="views/img/utileria/colisionesBalas.png";

 datos.posBalasEnemigos[i].x=-500;
 datos.posBalasEnemigos[i].y=-500;
 datos.disparo_ancho = 50;
 datos.disparo_alto = 50;

 setTimeout(function(){

 datos.disparo_y = -500;

 }, 100)


}


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


if(datos.nivel == 1){

	var xhr_trampas = new XMLHttpRequest();
	xhr_trampas.open("GET", "views/js/json/trampasNivel1.json", true)

}

if(datos.nivel == 2){

   var xhr_trampas = new XMLHttpRequest();
   xhr_trampas.open("GET", "views/js/json/trampasNivel2.json", true)  

}

if(datos.nivel == 3){

	 var xhr_trampas = new XMLHttpRequest();
	 xhr_trampas.open("GET", "views/js/json/trampasNivel3.json", true)
}

xhr_trampas.send();
xhr_trampas.onreadystatechange = function(){

   if ((xhr_trampas.readyState == 4)&&(xhr_trampas.status == 200)){

	   datos.posTrampas = JSON.parse(xhr_trampas.responseText)

	   for(var i =0; i< datos.posTrampas.length; i++){
		   datos.imgTrampas[i] = new Image();
		   datos.imgTrampas[i].src="views/img/utileria/trampas.png";
	   }

   }
}


/*=============================================
		resetear Enemigos
		=============================================*/

		datos.imgEnemigos = new Image();
		datos.imgEnemigos.src = "views/img/utileria/enemigos.png";
		datos.imgBalasEnemigos = new Image();
		datos.imgBalasEnemigos.src = "views/img/utileria/balasEnemigos.png";	
for(var i = 1; i <= 3; i++){
	
		if(datos.nivel == i){

			var xhr_enemigos = new XMLHttpRequest();
			xhr_enemigos.open("GET", "views/js/json/enemigosNivel"+i+".json", true)

		}
	}

		xhr_enemigos.send();

		xhr_enemigos.onreadystatechange = function(){

			if ((xhr_enemigos.readyState == 4)&&(xhr_enemigos.status == 200)){

				// El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.

				datos.posEnemigos = JSON.parse(xhr_enemigos.responseText);
				
				datos.posBalasEnemigos = JSON.parse(xhr_enemigos.responseText);

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

brave://settings/clearBrowserData?search=borrar

opera://settings/clearBrowserData

http://localhost/phpmyadmin



*/ 