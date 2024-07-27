<?php
session_start();

include_once '../config/conexion.php';

class login
{
    public function Login($correo, $clave)
    {
        $conexion = conexion::conectar();
        $sql = $conexion->prepare("SELECT * FROM usuario WHERE correo = :correo AND clave = :clave LIMIT 1");
        $sql->bindParam(':correo', $correo);
        $sql->bindParam(':clave', $clave);
        $sql->execute();
        $resultado = $sql->fetch(PDO::FETCH_ASSOC);

        if ($resultado) {
            $_SESSION["usuario"] = $resultado['nombre'];
            $response = [
                'mensaje' => 'exito',
                'nombre' => $resultado['nombre']
            ];
        } else {
            $response = [
                'mensaje' => 'error'
            ];
        }
        return json_encode($response);
    }

   

}
