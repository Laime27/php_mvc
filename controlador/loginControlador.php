
<?php

include_once '../modelo/loginModelo.php';

$accion = $_POST['accion'];


switch ($accion) {
   case 'Verificar_usuario':
       $correo = $_POST['correo'];
       $clave = $_POST['clave'];

       $login = new login();
       $datos = $login->Login($correo, $clave);
       echo $datos;
       break;
        
}












?>