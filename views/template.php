<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Juego de plataforma</title>

    <link rel="icon" href="views/img/intro/favicon.png">
    <link href="views/css/estilo.css" type="text/css" rel="stylesheet" media="">
    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet">

    <!--font-family: 'Kaushan Script', cursive;-->
</head>
<body>
  

<div id="vertical"></div>

<div id="marco"></div>


<!--Contenedor-->
<div id="contenedor">

<?php
if(isset($_GET["validar"]))
{

switch($_GET["validar"]){

case "inicio":
    include "modules/inicio.php";
    break;
    case "salir":
        include "modules/salir.php";
        break;
    default;
    include "modules/ingreso.php";

  

}

 
}
else
{
    include "modules/ingreso.php";
}



?>

</div>

<!---http://localhost/videojuego%20web/index.php--->

<!--Creditos-->

<footer>
<center>
<p> Hecho por sergio merino cortez front flip studio games :) </p>
</center>
</footer>

<script src="views/js/variables_y_propiedades.js"></script>
<script src="views/js/inicio.js"></script>
<script src="views/js/juego.js"></script>
<script src="views/js/lienzo.js"></script>
<script src="views/js/ampliarCanvas.js"></script>
<script src="views/js/screenfull.min.js"></script>

<!---============================

PANTALLA DE INICIO DISPOSITIVOS TOUCH
==================================---->

<meta name="viewport" content="user-scalable=no, maximum-scale=1.0, minimal-ui"/>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-barstyle" content="black-translucent">
<link rel="apple-touch-icon" size="152x152" href="views/img/touch/favicon152.png">



<meta name="mobile-web-app-capable" content="yes"/>
<link rel="shurtcut icon" size="196x196" href="views/img/touch/favicon196.png">


<script>
//aqui va la api de  facebook pero el host no lo admite 
</script>
</body>
</html>