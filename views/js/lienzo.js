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

 ctx.drawImage(datos.plano3, 0, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
 ctx.drawImage(datos.plano3, 1000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
 ctx.drawImage(datos.plano3, 2000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);


		/*=============================================
plano2
 		=============================================*/

  ctx.drawImage(datos.plano2, 0, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
  ctx.drawImage(datos.plano2, 1000, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
  ctx.drawImage(datos.plano2, 2000, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);		


		/*=============================================
Plano1
 		=============================================*/

   ctx.drawImage(datos.plano1, 0, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
   ctx.drawImage(datos.plano1, 1000, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
   ctx.drawImage(datos.plano1, 2000, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);		


		/*=============================================
Detalles
 		=============================================*/

 for(var i = 0; i < datos.bloquesDetalles.length; i++){	
	
    ctx.drawImage(datos.detalles, datos.bloquesDetalles[i].x, datos.bloquesDetalles[i].y, datos.bloquesDetalles[i].ancho, datos.bloquesDetalles[i].alto);	


          }

 
		/*=============================================
Bloques
 		=============================================*/

for(var i = 0; i < datos.bloques.length; i++){	

    ctx.drawImage(datos.texturaPlataforma, datos.bloques[i].x, datos.bloques[i].y, datos.bloques[i].ancho, datos.bloques[i].alto);

}


		/*=============================================
Jugador
 		=============================================*/


 ctx.drawImage(datos.imgJugador, 0, 0, 100, 100, datos.jugador_x, datos.jugador_y, datos.jugador_ancho, datos.jugador_alto);

 
		/*=============================================
		PLANO 0
		=============================================*/

        ctx.drawImage(datos.plano0, 0, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
		ctx.drawImage(datos.plano0, 1000, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
		ctx.drawImage(datos.plano0, 2000, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);		
		


     }

}