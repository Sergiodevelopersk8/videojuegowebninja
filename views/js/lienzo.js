/***
 * 
 * Metodos del objeto lienzo
 */

var lienzo ={

    canvas: function(){

		/*=============================================
Borrar canvas
 		=============================================*/

ctx.clearRect(0,0,canvas.width,canvas.height);


		/*=============================================
plano 3
 		=============================================*/

 ctx.drawImage(datos.plano3, datos.desplazamientoEscenario/5, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
 ctx.drawImage(datos.plano3, datos.desplazamientoEscenario/5+1000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);


		/*=============================================
plano2
 		=============================================*/

  ctx.drawImage(datos.plano2, datos.desplazamientoEscenario/3.5, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
  ctx.drawImage(datos.plano2, datos.desplazamientoEscenario/3.5+1000, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);


		/*=============================================
Plano1
 		=============================================*/

   ctx.drawImage(datos.plano1, datos.desplazamientoEscenario/2, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
   ctx.drawImage(datos.plano1, datos.desplazamientoEscenario/2+1000, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);


		/*=============================================
Detalles
 		=============================================*/

 for(var i = 0; i < datos.bloquesDetalles.length; i++){	
	
    ctx.drawImage(datos.detalles, datos.bloquesDetalles[i].x+datos.desplazamientoEscenario, datos.bloquesDetalles[i].y, datos.bloquesDetalles[i].ancho, datos.bloquesDetalles[i].alto);	


          }

 
		/*=============================================
Trampas
 		=============================================*/

		 for(var i = 0; i < datos.posTrampas.length; i++){	

			ctx.drawImage(datos.imgTrampas[i], datos.sprite_x, 0, 100, 100, datos.posTrampas[i].x, datos.posTrampas[i].y + datos.movTrampas,
				datos.posTrampas[i].ancho, datos.posTrampas[i].alto);
		
		}





		/*=============================================
Bloques
 		=============================================*/

for(var i = 0; i < datos.bloques.length; i++){	

    ctx.drawImage(datos.texturaPlataforma, datos.bloques[i].x+datos.desplazamientoEscenario, datos.bloques[i].y, datos.bloques[i].ancho, datos.bloques[i].alto);

}



		/*=============================================
monedas
 		=============================================*/

		 for(var i = 0; i < datos.posMonedas.length; i++){	

			ctx.drawImage(datos.imgMonedas[i], datos.sprite_x, 0, 100, 100, datos.posMonedas[i].x, datos.posMonedas[i].y,
				datos.posMonedas[i].ancho, datos.posMonedas[i].alto);
		
		}

		
		/*=============================================
Balas Enemigos
 		=============================================*/

		 for(var i = 0; i < datos.posBalasEnemigos.length; i++){	

			ctx.drawImage(datos.imgBalasEnemigos, datos.posBalasEnemigos[i].x, datos.posBalasEnemigos[i].y,
				datos.posBalasEnemigos[i].ancho-20, datos.posBalasEnemigos[i].alto-20);
		
		}

		/*=============================================
Enemigos
 		=============================================*/

		 for(var i = 0; i < datos.posEnemigos.length; i++){	

			ctx.drawImage(datos.imgEnemigos, datos.posEnemigos[i].x, datos.posEnemigos[i].y,
				datos.posEnemigos[i].ancho, datos.posEnemigos[i].alto);
		
		}





		/*=============================================
Jugador
 		=============================================*/


 ctx.drawImage(datos.imgJugador, datos.sprite_x, 0, 100, 90, datos.jugador_x, datos.jugador_y, datos.jugador_ancho, datos.jugador_alto);

 
	/*=============================================
Disparo Jugador
 		=============================================*/

		 if(datos.disparoDer == true || datos.disparoIzq == true){

		 ctx.drawImage(datos.imgDisparoJugador, datos.sprite_x, 0, 100, 100, datos.disparo_x, datos.disparo_y, datos.disparo_ancho, datos.disparo_alto);
		 }
 


		/*=============================================
		PLATAFORMAS
		=============================================*/

		for(var i = 0; i < datos.plataforma.length; i++){	
ctx.fillStyle = "rgba(255,0,0,0)";
			ctx.fillRect(datos.plataforma[i].x, datos.plataforma[i].y, datos.plataforma[i].ancho,
				  datos.plataforma[i].alto);
		
		}
		



		/*=============================================
		PLANO 0
		=============================================*/

        ctx.drawImage(datos.plano0, datos.desplazamientoEscenario/1.5, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
		ctx.drawImage(datos.plano0, datos.desplazamientoEscenario/1.5+1000, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
		


     }

}