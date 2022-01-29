<?php
class Conexion{

   static public function conectar(){

        $link = new PDO("mysql:host=sql210.epizy.com;dbname=epiz_30670845_blackninja","epiz_30670845","dOfNoex4tEAQj71");
        return $link;
    }
    


}






?>