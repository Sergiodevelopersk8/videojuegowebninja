<?php

require_once "../../controllers/usuarios.php";
require_once "../../models/usuarios.php";

class Ajax{
    public $identificador;
    public $primer_nombre;
    public $foto;
public $a;
    public function gestorUsuariosAjax(){
$datos = array("identificador"=> $this->identificador,"primer_nombre"=> $this->primer_nombre,"foto"=> $this->foto);

$respuesta = GestorUsuariosController::guardarUsuariosController($datos);
echo $respuesta;
    }
}

if(isset($_POST["identificador"])){
    $a=new Ajax();
    $a->identificador = $_POST["identificador"];
    $a->primer_nombre = $_POST["primer_nombre"];
    $a->foto = $_POST["foto"];
    $a->gestorUsuariosAjax();

}

?>