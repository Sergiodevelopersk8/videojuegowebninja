<?php

class GestorUsuariosController{
/**guardad usuarios */
   static public function guardarUsuariosController($datos){
$respuestaInsertar = "";
$datosController = array("identificador"=>$datos["identificador"], "primer_nombre"=>$datos["primer_nombre"], "foto"=>$datos["foto"],"nivel1"=>"ok");

$respuestaSeleccionar = GestorUsuariosModel::seleccionarUsuariosModel($datosController);


if(!$respuestaSeleccionar){
$respuesta = GestorUsuariosModel::guardarUsuariosModel($datosController);


}
   
if($respuestaSeleccionar || $respuestaInsertar == "ok"){
   $respuestaSeleccionar = GestorUsuariosModel::seleccionarUsuariosModel($datosController);
session_start();

$_SESSION["validar"] = true;
$_SESSION["id"] = $respuestaSeleccionar["id"];
$_SESSION["primer_nombre"]=$respuestaSeleccionar["primer_nombre"];
$_SESSION["foto"]=$respuestaSeleccionar["foto"];
$_SESSION["nivel1"]=$respuestaSeleccionar["nivel1"];
$_SESSION["nivel2"]=$respuestaSeleccionar["nivel2"];
$_SESSION["nivel3"]=$respuestaSeleccionar["nivel3"];

$_SESSION["puntaje_nivel1"]=$respuestaSeleccionar["puntaje_nivel1"];

$_SESSION["puntaje_nivel2"]=$respuestaSeleccionar["puntaje_nivel2"];

$_SESSION["puntaje_nivel3"]=$respuestaSeleccionar["puntaje_nivel3"];


echo "ok";

}


}

/*mejores puntajes
#----------------------------------------------------------------------*/

public function puntajesNivelesController($datos){

 $respuesta= GestorUsuariosModel::puntajesNivelModel($datos);
 foreach($respuesta as $row=> $item){
    if($item[$datos]>0){
       echo '<li>
       <img src="'.$item["foto"].'">
       <h3>'.$item["primer_nombre"].'</h3>
       <h2>'.$item[$datos].'</h2>
       </li>
       
       ';
    }
 }

}

static public function guardarPuntajesController($datos){

$numeroNivel=0;

if($datos["numeroNivel"]==3){

$numeroNivel=3;

}

if($datos["numeroNivel"]<3){
   $numeroNivel=$datos["numeroNivel"] + 1;
}

$datosController = array("nivel"=>$datos["nivel"], 
                         "puntaje"=>$datos["puntaje"],
                         "numero_nivel"=> "nivel".$numeroNivel,
                         "puntaje_nivel"=> "puntaje_nivel".$datos["numeroNivel"],
                         "id"=>$datos["id"]);

//$respuesta = GestorUsuariosController::guardarPuntajesController($datosController,"usuarios");


$respuesta = GestorUsuariosModel::guardarPuntajesModel($datosController,"usuarios");


if($respuesta == "ok"){

   $respuesta1 = GestorUsuariosModel::seleccionarPuntajesModel($datosController,"usuarios");

session_start();

  $_SESSION["nivel1"]=$respuesta1["nivel1"];
  $_SESSION["puntaje_nivel1"]=$respuesta1["puntaje_nivel1"];
  
  $_SESSION["nivel2"]=$respuesta1["nivel2"];
  $_SESSION["puntaje_nivel2"]=$respuesta1["puntaje_nivel2"];
  
  $_SESSION["nivel3"]=$respuesta1["nivel3"];
  $_SESSION["puntaje_nivel3"]=$respuesta1["puntaje_nivel3"];
  

   echo "ok";

}

}


}

?>