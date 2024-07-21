
<?php

class Conexion
{

    public static function conectar()
    {

        $host = 'localhost';
        $usuario = 'root';
        $clave = '';
        $bd = 'prueba';

        $conexion = new PDO("mysql:host=$host;dbname=$bd;", $usuario, $clave);
        return  $conexion;
    }
}



?>