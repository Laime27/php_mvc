
<?php

include_once '../modelo/productoModelo.php';

$accion = $_POST['accion'];


switch ($accion) {
    case 'ListarProductos':
        $producto = new producto();
        $datos = $producto->ListarProducto();
        echo $datos;
        break;

    case 'CrearProducto':
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $precio = $_POST['precio'];

        $producto = new producto();
        $datos = $producto->CrearProducto($nombre, $descripcion, $precio);
        echo $datos;
        break;
   
    case 'EliminarProducto':
        $id = $_POST['id'];
        $producto = new producto();
        $datos = $producto->EliminarProducto($id);
        echo $datos;
        break;
   
    case 'ObtenerProducto':
        $id = $_POST['id'];
        $producto = new producto();
        $datos = $producto->ObtenerProducto($id);
        echo $datos;
        break;

    case 'ActualizarProducto':
        $id = $_POST['id'];
        $nombre = $_POST['nombre'];
        $descripcion = $_POST['descripcion'];
        $precio = $_POST['precio'];

        $producto = new producto();
        $datos = $producto->ActualizarProducto($id, $nombre, $descripcion, $precio);
        echo $datos;
        break;
        
}












?>