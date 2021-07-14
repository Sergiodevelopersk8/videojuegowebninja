/*=============================================
METODOS DEL OBJETO INICIO
=============================================*/

var inicio = {

	/*=============================================
	METODO INGRESO A LA APLICACIÓN
	=============================================*/

	iniciar: function(){

		var identificador = "22222222";		
		var primer_nombre = "julio";
		var foto = "views/img/intro/julio.png";	

		//AJAX: Asynchronous JavaScript And XML

		var xhr = new XMLHttpRequest();
		var url = "views/ajax/usuarios.php";
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("identificador="+identificador+"& primer_nombre="+primer_nombre+"& foto="+foto);

		xhr.onreadystatechange = function(){

			if((xhr.readyState == 4) && (xhr.status == 200)){

				if(xhr.responseText == "ok"){

					window.location = "inicio";
				}
			}

		}

	},

	/*=============================================
	ELEGIR NIVEL
	=============================================*/

	elegirNivel: function(event){

		datos.nivel = event.getAttribute("nivel");
		inicio.inicioNiveles(datos.nivel);

	},

	/*=============================================
	INICIO DE NIVELES
	=============================================*/

	inicioNiveles: function(nivel){

		document.querySelector("#inicio").parentNode.removeChild(document.querySelector("#inicio"));

		canvas = document.querySelector("#lienzo");
		ctx = canvas.getContext("2d");

		document.querySelector("#carga").style.display = "block";

		/*=============================================
		PLANO 3
		=============================================*/

		datos.plano3 = new Image();
		datos.plano3.src = "views/img/nivel"+nivel+"/plano3.png";
		datos.plano3.onload = function(){
		ctx.drawImage(datos.plano3, 0, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
		ctx.drawImage(datos.plano3, 1000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
		ctx.drawImage(datos.plano3, 2000, 0, datos.plano3.naturalWidth, datos.plano3.naturalHeight);
		}

		/*=============================================
		PLANO 2
		=============================================*/

		datos.plano2 = new Image();
		datos.plano2.src = "views/img/nivel"+nivel+"/plano2.png";
		datos.plano2.onload = function(){
		ctx.drawImage(datos.plano2, 0, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
		ctx.drawImage(datos.plano2, 1000, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);
		ctx.drawImage(datos.plano2, 2000, 0, datos.plano2.naturalWidth, datos.plano2.naturalHeight);		
		}

		/*=============================================
		PLANO 1
		=============================================*/

		datos.plano1 = new Image();
		datos.plano1.src = "views/img/nivel"+nivel+"/plano1.png";
		datos.plano1.onload = function(){
		ctx.drawImage(datos.plano1, 0, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
		ctx.drawImage(datos.plano1, 1000, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);
		ctx.drawImage(datos.plano1, 2000, 0, datos.plano1.naturalWidth, datos.plano1.naturalHeight);		
		}

		/*=============================================
		DETALLES
		=============================================*/

		datos.detalles = new Image();
		datos.detalles.src = "views/img/nivel"+nivel+"/detalles.png";

		if(nivel == 1){

		 	var xhr_detalles = new XMLHttpRequest();
			xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel1.json", true)

		}

		if(nivel == 2){

			var xhr_detalles = new XMLHttpRequest();
			xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel2.json", true)  

		}

		if(nivel == 3){

      		var xhr_detalles = new XMLHttpRequest();
			xhr_detalles.open("GET", "views/js/json/bloquesDetallesNivel3.json", true)
		}

		xhr_detalles.send();

		xhr_detalles.onreadystatechange = function(){

			if ((xhr_detalles.readyState == 4)&&(xhr_detalles.status == 200)){

				datos.bloquesDetalles = JSON.parse(xhr_detalles.responseText)

			}
		}

		datos.detalles.onload = function(){

			for(var i = 0; i < datos.bloquesDetalles.length; i++){	
	
				ctx.drawImage(datos.detalles, datos.bloquesDetalles[i].x, datos.bloquesDetalles[i].y, datos.bloquesDetalles[i].ancho, datos.bloquesDetalles[i].alto);	

			}

		}

		/*=============================================
		BLOQUES
		=============================================*/

		datos.texturaPlataforma = new Image();
		datos.texturaPlataforma.src = "views/img/nivel"+nivel+"/texturaPlataforma.jpg";	

		if(nivel == 1){

			var xhr = new XMLHttpRequest();
			xhr.open("GET", "views/js/json/bloquesNivel1.json", true)

		}

		if(nivel == 2){

			var xhr = new XMLHttpRequest();
			xhr.open("GET", "views/js/json/bloquesNivel2.json", true)
		}


		if(nivel == 3){

			var xhr = new XMLHttpRequest();
			xhr.open("GET", "views/js/json/bloquesNivel3.json", true)
		}

		xhr.send();

		xhr.onreadystatechange = function(){

			if ((xhr.readyState == 4)&&(xhr.status == 200)){

				// El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por el análisis.

				datos.bloques = JSON.parse(xhr.responseText)

			}
		}

		datos.texturaPlataforma.onload = function(){

			for(var i = 0; i < datos.bloques.length; i++){	

				ctx.drawImage(datos.texturaPlataforma, datos.bloques[i].x, datos.bloques[i].y, datos.bloques[i].ancho, datos.bloques[i].alto);

			}

		}

		/*=============================================
		JUGADOR
		=============================================*/

		datos.imgJugador = new Image();
		datos.imgJugador.src = "views/img/jugador/stop_right.png";
		datos.imgJugador.onload = function(){

			ctx.drawImage(datos.imgJugador, 0, 0, 100, 100, datos.jugador_x, datos.jugador_y, datos.jugador_ancho, datos.jugador_alto);

		}

		/*=============================================
		PLANO 0
		=============================================*/

		datos.plano0 = new Image();
		datos.plano0.src = "views/img/nivel"+nivel+"/plano0.png";
		datos.plano0.onload = function(){
		ctx.drawImage(datos.plano0, 0, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
		ctx.drawImage(datos.plano0, 1000, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);
		ctx.drawImage(datos.plano0, 2000, 0, datos.plano0.naturalWidth, datos.plano0.naturalHeight);		
		}

		/*=============================================
		PRELOAD
		=============================================*/

		var cargarArchivos = [datos.plano0, datos.texturaPlataforma, datos.detalles, datos.plano1, datos.plano2, datos.plano3];
		var numeroArchivos = 0;
		var porcentaje = 0;

		for(var i = 0; i < cargarArchivos.length; i++){

			cargarArchivos[i].addEventListener("load", precarga)
		}

		function precarga(e){
			
			// setInterval(function(){

			numeroArchivos++;
			porcentaje = 100 / cargarArchivos.length;

			document.querySelector("#carga span").innerHTML = Math.ceil(porcentaje * numeroArchivos) + "%";
			document.querySelector("#carga meter").value = Math.ceil(porcentaje * numeroArchivos);

			if(numeroArchivos == cargarArchivos.length){

				document.querySelector("#lienzo").style.display = "block";

				document.querySelector("#carga").style.opacity = 0; 

				setTimeout(function(){
								 
					document.querySelector("#carga").style.display = "none";
					  
				},10);  

			}

			// },1000)

		}

	}

}