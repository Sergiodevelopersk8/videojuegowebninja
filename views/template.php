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

</body>
</html>