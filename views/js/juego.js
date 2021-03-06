/****************
 * 
 * metodo del juego
 * 
 */


var juego ={

  
bajarVolumen:function(event){

/*==================================
CONTROL DE SONIDO
====================================*/

  var volumen = event.getAttribute("volumen");
  var botonesSonidos = document.querySelectorAll("#sonido ul li");
  for (var i =0; i < datos.listaSonidos.length; i++){
    datos.listaSonidos[i].volume = volumen;
  }

  if(volumen == 0){
    for(var i =0; i<botonesSonidos.length; i++){
      botonesSonidos[i].style.opacity = .5;
    }
  }
  else if(volumen == 0.3){
    botonesSonidos[0].style.opacity = 1;
    botonesSonidos[1].style.opacity = 1;
    botonesSonidos[2].style.opacity = .5;
  }
  else {
    for(var i= 0; i<botonesSonidos.length; i++){
      botonesSonidos[i].style.opacity = 1;
    }
  }

},
controles: function () {

		/*=============================================
		EVENTOS TOUCH
		=============================================*/

		document.querySelector("#izquierda").addEventListener("touchstart", function(e){
			e.preventDefault();
			datos.izquierda = true;
		})

		document.querySelector("#izquierda").addEventListener("touchend", function(e){
			e.preventDefault();
			datos.izquierda = false; 
			datos.imgJugador.src = datos.stop_left.src;
		})

		document.querySelector("#derecha").addEventListener("touchstart", function(e){
			e.preventDefault();
			datos.derecha = true;

		})

		document.querySelector("#derecha").addEventListener("touchend", function(e){
			e.preventDefault();
			datos.derecha = false; 	
			datos.imgJugador.src = datos.stop_right.src;
		})

		document.querySelector("#arriba").addEventListener("touchstart", function(e){
			e.preventDefault();
			datos.salto = true; datos.sSaltoJugador.play();

		})

		document.querySelector("#arriba").addEventListener("touchend", function(e){
			e.preventDefault();
			datos.salto = false;

		})

		document.querySelector("#disparo").addEventListener("touchstart", function(e){
			e.preventDefault();
			datos.disparo = true;
			datos.disparo_y = datos.jugador_y;
			datos.movDisparoJugador = 0;
			datos.imgDisparoJugador.src = datos.imgDisparoJugador.src;
			datos.disparo_ancho = 15;
			datos.disparo_alto = 15;
			datos.sDisparoJugador.play();
		})

		document.querySelector("#disparo").addEventListener("touchend", function(e){
			e.preventDefault();
			datos.disparo = false;

		})






},

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
if(tecla.keyCode == 38){datos.salto = true; datos.sSaltoJugador.play();}
if(tecla.keyCode == 32){datos.disparo = true; datos.disparo_y = datos.jugador_y; datos.movDisparoJugador=0;

  
  datos.imgDisparoJugador.src = datos.balasJugador.src;
  datos.disparo_ancho = 15;
  datos.disparo_alto = 15; 
datos.sDisparoJugador.play();}
},

soltar: function(tecla){

/**
 * soltar tecla
 */

 if(tecla.keyCode == 37){datos.izquierda = false; datos.imgJugador.src = datos.stop_left.src;}
 if(tecla.keyCode == 39){datos.derecha = false; datos.imgJugador.src = datos.stop_right.src;} 
    if(tecla.keyCode == 38){datos.salto = false;}

    if(tecla.keyCode == 32){datos.disparo = false;}

},

tiempo: function(){


/**=============================================
  Sonidos del nivel
 ==============================================*/

if(datos.nivel ==1){datos.sBackground01.play(); datos.sBackground01.loop = true;}
if(datos.nivel ==2){datos.sBackground02.play(); datos.sBackground02.loop = true;}
if(datos.nivel ==3){datos.sBackground03.play(); datos.sBackground3.loop = true;}

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
    datos.imgJugador.src = datos.run_left.src;
  }

  if(datos.salto && datos.gravedad == 0){
    datos.imgJugador.src = datos.jump_left.src;
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
  datos.imgJugador.src = datos.run_right.src;
}

if(datos.salto && datos.gravedad == 0){
  datos.imgJugador.src = datos.jump_right.src;
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
  datos.sMonedas.play();
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
datos.sColisionTrampasEnemigos.play();
datos.sEnergia.play();
  datos.imgTrampas[i].src=datos.colisionesTrampas.src;
 datos.imgJugador.src = datos.colision_trampa.src;
datos.energia--;
document.querySelector("#energia progress").value = datos.energia;
document.querySelector("#energia span").innerHTML = datos.energia + "%"; 

if(datos.energia <= 0){
  datos.reset = true;
}


}
else{
  datos.imgTrampas[i].src=datos.trampas.src;
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
  datos.sColisionTrampasEnemigos.play();
  datos.sEnergia.play();
  datos.energia--;
document.querySelector("#energia progress").value = datos.energia;
document.querySelector("#energia span").innerHTML = datos.energia + "%"; 

if(datos.energia <= 0){
  datos.reset = true;
}


  datos.imgJugador.src = datos.colision_trampa.src;
  datos.imgBalasEnemigos.src=datos.colisionesBalasEnemigos.src;
 
 setTimeout(function(){

  datos.imgJugador.src = datos.stop_right.src;
  datos.imgBalasEnemigos.src=datos.balasEnemigos.src;


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
  datos.sColisionBalasEnemigo.play();
 datos.imgDisparoJugador.src=datos.colisionesBalas.src;

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
   datos.sPerder.play();
   datos.reset = true;

 }

 
/**=============================================
  resetear nivel
 ==============================================*/

if(datos.reset == true){
datos.sPerderVida.play();
datos.reset = false;
datos.gravedad = 0;
datos.desplazamientoEscenario = 0;
datos.movimiento = 0;
datos.jugador_y = 200;
datos.jugador_x = 70;


/**===================================
Resetear contador de monedas
 ====================================*/

datos.contadorMonedas = 0;
document.querySelector('#monedas span').innerHTML = datos.contadorMonedas;

/**===================================
Resetear energia
 ====================================*/
datos.energia=100;
document.querySelector('#energia progress').value = datos.energia;
//document.querySelector('#monedas span').innerHTML = datos.energia + "%";
document.querySelector('#energia span').innerHTML = datos.energia + "%";

/**Reinicio de plataformas */


/**===================================
Perdiendo vidas
 ====================================*/
datos.vidas = datos.vidas - 1;

if(datos.vidas == 2){
  document.querySelector('#vidas ul li:nth-child(3)').innerHTML="X";
}
if(datos.vidas == 1){
  document.querySelector('#vidas ul li:nth-child(2)').innerHTML="X";
}
if(datos.vidas == 0){
  if(datos.nivel == 1){datos.sBackground01.volume = 0;}
  if(datos.nivel == 2){datos.sBackground02.volume = 0;}
  if(datos.nivel == 3){datos.sBackground03.volume = 0;}
  datos.sColisionTrampasEnemigos.volume = 0;
  datos.sPerder.play();
  document.querySelector('#vidas ul li:nth-child(1)').innerHTML="X";
  document.querySelector('#gameover').style.display="block";
  cancelAnimationFrame(animacion);
  setTimeout(function(){
    window.location.reload();

  }, 5000);
  }

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
		   datos.imgMonedas[i].src=datos.monedas.src;
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
		   datos.imgTrampas[i].src=datos.trampas.src;
	   }

   }
}


/*=============================================
		resetear Enemigos
		=============================================*/

	/*	datos.imgEnemigos = new Image();
		datos.imgEnemigos.src = datos.enemigos.src;
		datos.imgBalasEnemigos = new Image();
		datos.imgBalasEnemigos.src = datos.balasEnemigos.src;*/	
for(var i = 1; i <= 3; i++){
	
		if(datos.nivel == i){

			var xhr_enemigos = new XMLHttpRequest();
			xhr_enemigos.open("GET", "views/js/json/enemigosNivel"+i+".json", true)

		}
	}

		xhr_enemigos.send();

		xhr_enemigos.onreadystatechange = function(){

			if ((xhr_enemigos.readyState == 4)&&(xhr_enemigos.status == 200)){

				// El m??todo JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el an??lisis.

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
document.querySelector('#final').style.display="block";
datos.sGanar.play();
if(datos.nivel==1){datos.sBackground01.pause();}
if(datos.nivel==2){datos.sBackground02.pause();}
if(datos.nivel==3){datos.sBackground03.pause();}
document.querySelector("#finalMonedas span").innerHTML = datos.contadorMonedas;
document.querySelector("#medidaEnergiaFinal").value = datos.energia;
document.querySelector("#totalEnergia ").innerHTML = datos.energia + "%";
var puntosEnergia = 100 - datos.energia;
document.querySelector("#puntosEnergia span").innerHTML = "-"+puntosEnergia;
var puntosVidas = 0;
if(datos.vidas == 3){puntosVidas = 0;}
if(datos.vidas == 2){puntosVidas = 10;document.querySelector("#final ol li:nth-child(3)").innerHTML = "X";}
if(datos.vidas == 1){puntosVidas = 20;
 document.querySelector("#final ol li:nth-child(2)").innerHTML = "X";
document.querySelector("#final ol li:nth-child(3)").innerHTML = "X";}
document.querySelector("#finalVidas span").innerHTML = "-" +puntosVidas;
datos.puntaje = datos.contadorMonedas - ( puntosEnergia + puntosVidas);
datos.incrementoPuntaje = 0;
var intervalo = setInterval(function(){
  if(datos.incrementoPuntaje > datos.puntaje){
datos.incrementoPuntaje = datos.puntaje;
document.querySelector("#puntajeFinal").innerHTML = datos.puntaje;
datos.sPuntos.play();
datos.sMonedero.pause();
clearInterval(intervalo);
setTimeout(function(){

  var xhr = new XMLHttpRequest();
var nivel = "ok";
var puntaje = datos.puntaje;
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

},5000)
  }
  else{
datos.incrementoPuntaje++;
datos.sMonedero.play();
document.querySelector("#puntajeFinal").innerHTML = datos.incrementoPuntaje;
  }
}, 16)



 }



},

salirDelJuego: function(){

  window.location.reload();

}


}

/*

brave://settings/clearBrowserData?search=borrar

opera://settings/clearBrowserData

http://localhost/phpmyadmin



*/ 