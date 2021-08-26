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
<meter id="medidaEnergia" value="100" min="0" max="100" high="40"></meter>
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

</div>

</div>


 <!----preload------->

 <div id="carga">

 <div id="preload">

 <span>0%</span>
 <br>
 <meter value="0" min="0" max="100" high="90"></meter>

 </div>

 </div>