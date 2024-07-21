
<?php

include_once '../config/conexion.php';
class producto
{
    public function ListarProducto()
    {
        $conexion = conexion::conectar();
        $sql = $conexion->prepare("SELECT * FROM productos ORDER BY id DESC");
        $sql->execute();
        $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);
        return json_encode($resultado);
    }

    public function EliminarProducto($id)
    {
        $conexion = conexion::conectar();
        $sql = $conexion->prepare("DELETE FROM productos WHERE id = :id");
        $sql->bindParam(':id', $id);
        $sql->execute();
        if ($sql->rowCount() > 0) {
            $response = [
                'mensaje' => 'exito'
            ];
        }
        return json_encode($response);
    }

    public function CrearProducto($nombre, $descripcion, $precio)
    {
        $conexion = conexion::conectar();
        $sql = $conexion->prepare("INSERT INTO productos (nombre, descripcion, precio) VALUES (:nombre, :descripcion, :precio)");
        $sql->bindParam(':nombre', $nombre);
        $sql->bindParam(':descripcion', $descripcion);
        $sql->bindParam(':precio', $precio);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            $response = [
                'mensaje' => 'exito'

            ];
        }
        return json_encode($response);
    }

    public function ObtenerProducto($id)
    {
        $conexion = conexion::conectar();
        $sql = $conexion->prepare("SELECT * FROM productos WHERE id = :id");
        $sql->bindParam(':id', $id);
        $sql->execute();
        $resultado = $sql->fetchAll(PDO::FETCH_ASSOC);
        return json_encode($resultado);
    }

    public function ActualizarProducto($id, $nombre, $descripcion, $precio)
    {
        $conexion = conexion::conectar();
        $sql = $conexion->prepare("UPDATE productos SET nombre = :nombre, descripcion = :descripcion, precio = :precio WHERE id = :id");
        $sql->bindParam(':nombre', $nombre);
        $sql->bindParam(':descripcion', $descripcion);
        $sql->bindParam(':precio', $precio);
        $sql->bindParam(':id', $id);
        $sql->execute();

        if ($sql->rowCount() > 0) {
            $response = [
                'mensaje' => 'exito'
            ];
        } else{
            $response = [
                'mensaje' => 'error'
            ];
        }
        return json_encode($response);
    }


}
?>