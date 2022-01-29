<!---====================
INGRESO
---======================-->

<div id="ingreso">
<div id="instruccionesTouch">
    <button onclick="inicio.salirInstructivo()">X</button>
    <img src="views/img/touch/instructivoTOUCH.jpg" >
</div>
<div id="ingresoFacebook">

<img src="views/img/intro/facebook.svg">
<button onclick="inicio.iniciar()"> Ingresarsar con facebook</button>
</div>
<div id="ingresoSinFacebook">
		
		<input type="email" placeholder="Ingresa tu email" id="email">
		<input type="text" placeholder="Ingresa tu nombre" id="nombre">

		<center>
			
			<button onclick="inicio.iniciar()">Ingresar</button>

		</center>

	</div>

</div>