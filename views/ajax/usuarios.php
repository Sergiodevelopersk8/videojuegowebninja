<?php

require_once "../../controllers/usuarios.php";
require_once "../../models/usuarios.php";

class Ajax{

    /*========================
    REGISTRO DE USUARIOS
     ===========================*/ 

    public $identificador;
    public $primer_nombre;
    public $foto;
public $a;
    public function gestorUsuariosAjax(){
$datos = array("identificador"=> $this->identificador,"primer_nombre"=> $this->primer_nombre,"foto"=> $this->foto);

$respuesta = GestorUsuariosController::guardarUsuariosController($datos);
echo $respuesta;
    }

/*========================
Paso de nivel
     ===========================*/ 

public $nivel;
public $puntaje;
public $numeroNivel;
public $id;


public function gestordePuntajesAjax(){

$datos = array("nivel" => $this -> nivel,
               "puntaje" => $this -> puntaje,
               "numeroNivel" => $this -> numeroNivel,
               "id" => $this -> id);

$respuesta = GestorUsuariosController::guardarPuntajesController($datos);

echo $respuesta;

}

}
/*========================
  objetos de   REGISTRO DE USUARIOS
     ===========================*/ 



if(isset($_POST["identificador"])){
    $a=new Ajax();
    $a->identificador = $_POST["identificador"];
    $a->primer_nombre = $_POST["primer_nombre"];
    $a->foto = $_POST["foto"];
    $a->gestorUsuariosAjax();

}

/*========================
objeto paso niveles
     ===========================*/ 

     if(isset($_POST["nivel"])){

        $b = new Ajax(); 
        $b -> nivel = $_POST["nivel"];
        $b -> puntaje = $_POST["puntaje"];
        $b -> numeroNivel = $_POST["numeroNivel"];
        $b -> id = $_POST["id"];
        $b -> gestordePuntajesAjax();
    

     }

?>