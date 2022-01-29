<?php
session_start();

if(!$_SESSION["validar"]){
    header("location:ingreso");
    exit();


}


?>


<!---------------------
inicio
------------------------>

<div id="inicio">

<div id="cerrarSesion"><a href="salir">Cerrar Sesión</a></div>
<h2 id="saludo">¡Hola <?php echo $_SESSION["primer_nombre"];

echo '<img style="border-radius:100%; margin-left:10px;" width="30px" src="'. $_SESSION["foto"].'">'   ;

?>  Bienvenid@!</h2>
<!---------------------
nivel 1
------------------------>

<div id="nivel1" class="niveles">
    <div class="puntaje"><?php echo $_SESSION["puntaje_nivel1"];?>pts</div>

    <img src="views/img/intro/checkLevel1.svg">
    <center><button onclick="inicio.elegirNivel(this)"nivel="1" id="<?php  echo $_SESSION["id"];?>">Ingresar</button></center>

    <div class="puntajes">
        <h2>Mejores Niveles</h2>
    <ul>

    <?php
    $puntajes_nivel1 = new GestorUsuariosController();
    $puntajes_nivel1 ->puntajesNivelesController("puntaje_nivel1");
    
    
    ?>
     
    </ul>
    </div>
</div>

<!---------------------
nivel 2
------------------------>
<div id="nivel2" class="niveles">

<div class="puntaje"><?php echo $_SESSION["puntaje_nivel2"]?>pts</div>
<?php

if($_SESSION["nivel2"]=="ok"){
    
    echo '<img src="views/img/intro/checkLevel2.svg"> 
    <center><button onclick="inicio.elegirNivel(this)"nivel="2"  id="'.$_SESSION["id"] .'">Ingresar</button></center>';

}
else
{
   echo '<img src="views/img/intro/blockLevel2.svg">';
}


?>
   

    <div class="puntajes">

    <h2>Mejores Niveles</h2>
    <ul>

    <?php
    $puntajes_nivel2 = new GestorUsuariosController();
    $puntajes_nivel2 ->puntajesNivelesController("puntaje_nivel2");
    
    
    ?>
     
    </ul>
    </div>




</div>

<!---------------------
nivel 3
------------------------>
<div id="nivel3" class="niveles">

<div class="puntaje"><?php echo $_SESSION["puntaje_nivel3"]?>pts</div>
<?php

if($_SESSION["nivel3"]=="ok"){
    
    echo '<img src="views/img/intro/checkLevel3.svg"> 
    <center><button onclick="inicio.elegirNivel(this)"nivel="3" id="'. $_SESSION["id"].'">Ingresar</button></center>';

}
else
{
   echo '  <img src="views/img/intro/blockLevel3.svg">';
}


?>


  
    

    <div class="puntajes">

    <h2>Mejores Niveles</h2>
    <ul>

    <?php
    $puntajes_nivel3 = new GestorUsuariosController();
    $puntajes_nivel3 ->puntajesNivelesController("puntaje_nivel3");
    
    
    ?>
     
    </ul>

    </div>




</div>



</div>

<!----Canvas------->

<canvas id="lienzo" width="1000px" height="500px"></canvas>


<div id="btnAmpliar" onclick="ampliar();">Ampliar juego</div>


<!--=====================================
CONTROLES DISPOSITIVO
======================================-->
<div id="controles">
	
	<div id="izquierda"></div>
	<div id="derecha"></div>	
	<div id="disparo"></div>
	<div id="arriba"></div>

</div>


<!--========================================
TABLERO
============================================-->

<div id="tablero">
<!--========================================
Vidas
============================================-->

<div id="vidas">
<p>Vidas:</p>

<ul>
<li>
<img src="views/img/utileria/vidas.png">
</li>
<li>

<img src="views/img/utileria/vidas.png">
</li>
<li>

<img src="views/img/utileria/vidas.png">
</li>

</ul>

</div>

<!--========================================
Energia
============================================-->
<div id="energia">

<p>ENERGÍA: </p>
<progress id="medidaEnergia" value="100" min="0" max="100" high="40"></progress>
<span>100%</span>
</div>

<!--========================================
Monedas
============================================-->

<div id="monedas">
    <p>Monedas</p>
    <span>0</span>
<div id="spriteMoneda">

</div>

<div id="sonido">
    <p>sonido</p>
    <ul>
        <li onclick="juego.bajarVolumen(this)" volumen="0"></li>
        <li onclick="juego.bajarVolumen(this)" volumen="0.3"></li>
        <li onclick="juego.bajarVolumen(this)" volumen="1"></li>
    </ul>
</div>

</div>
<div id="salida">
    <button onclick="juego.salirDelJuego();">Salir</button>
</div>
</div>

<!--========================================
Vidas
============================================-->

<div id="gameover">
    <h1>GAME OVER</h1>
</div>


<!--=====================================
FINAL
======================================-->

<div id="final">
	
	<center>
		
		<div>
			<img src="views/img/intro/F-compartir.jpg" width="150px">
		</div>

	</center>

	<h1>¡LO LOGRASTE!<br>
	<span id="puntajeFinal">0</span> pts
	</h1>

	<ul>
		<li>
			<h3>MONEDAS</h3>
			<div id="spriteMonedaFinal"></div>
			<h4 id="finalMonedas">		
				<span>100</span> pts
			</h4>
		</li>

		<li>
			<h3>ENERGÍA</h3>
			<progress id="medidaEnergiaFinal" value="100" min="0" max="100" high="40" style="margin-top:40px"></progress>
			<span id="totalEnergia">100%</span>
			<h4 style="margin-top:20px" id="puntosEnergia">
				<span>100</span> pts
			</h4>
		</li>

		<li>
			<h3>VIDAS</h3>
				<ol>
					<li><img src="views/img/utileria/vidas.png"></li>
					<li><img src="views/img/utileria/vidas.png"></li>
					<li><img src="views/img/utileria/vidas.png"></li>
				</ol>
			<h4 id="finalVidas"><span>100</span> pts</h4>
		</li>
	</ul>
	
</div>




 <!----preload------->

 <div id="carga">

 <div id="preload">

 <span>0%</span>
 <br>
 <progress value="0" min="0" max="100" high="90"></progress>

 </div>

 </div>



 
<!--========================================
Vidas
============================================-->

<audio src="views/mp3/background01.mp3" id="sBackground01" type="audio/mpeg" muted></audio>
<audio src="views/mp3/background02.mp3" id="sBackground02" type="audio/mpeg" muted></audio>
<audio src="views/mp3/background03.mp3" id="sBackground03" type="audio/mpeg" muted></audio>
<audio src="views/mp3/colisionBalasEnemigo.mp3" id="sColisionBalasEnemigo" type="audio/mpeg" muted></audio>
<audio src="views/mp3/colisionTrampas-Enemigos.mp3" id="sColisionTrampas-Enemigos" type="audio/mpeg" muted></audio>
<audio src="views/mp3/energia.mp3" id="sEnergia" type="audio/mpeg" muted></audio>
<audio src="views/mp3/disparoEnemigo.mp3" id="sDisparoEnemigo" type="audio/mpeg" muted></audio>
<audio src="views/mp3/disparoJugador.mp3" id="sDisparoJugador" type="audio/mpeg" muted></audio>
<audio src="views/mp3/monedas.mp3" id="sMonedas" type="audio/mpeg" muted></audio>
<audio src="views/mp3/saltoJugador.mp3" id="sSaltoJugador" type="audio/mpeg" muted></audio>
<audio src="views/mp3/perder.mp3" id="sPerder" type="audio/mpeg" muted></audio>
<audio src="views/mp3/perderVida.mp3" id="sPerderVida" type="audio/mpeg" muted></audio>
<audio src="views/mp3/ganar.mp3" id="sGanar" type="audio/mpeg" muted></audio>
<audio src="views/mp3/monedero.mp3" id="sMonedero" type="audio/mpeg" muted></audio>
<audio src="views/mp3/puntos.mp3" id="sPuntos" type="audio/mpeg" muted></audio>