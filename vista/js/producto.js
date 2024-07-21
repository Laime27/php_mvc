

$(document).ready(function () {
    ListarProductos();
});


function ListarProductos() {

    $.ajax({
        url: "../../controlador/productoControlador.php",
        type: "POST",
        dataType: "json",
        data: { accion: 'ListarProductos' },
        success: function (response) {
            console.log(response);
            let template = '';
            response.forEach(producto => {
                template += `
                <tr id="${producto.id}">
                    <td>${producto.nombre}</td>
                    <td>${producto.descripcion}</td>
                    <td>${producto.precio}</td>
                    <td>
                        <button class="btn btn-primary btn-sm btnEditar"><i class="fas fa-pencil-alt"></i></button>
                        <button class="btn btn-danger btn-sm btnEliminar"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
                `;
            });
            $('#tblProductos').html(template);
        }

    });
}


$(document).on('click', '.btnEliminar', function () {
    let id = $(this).closest('tr').attr('id');

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success ",
            cancelButton: "btn btn-danger me-2"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, ¡bórralo!",
        cancelButtonText: "No, ¡cancela!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            EliminarProducto(id);
        }


    });
});

$(document).on('click', '.btnEditar', function () {
    $('#titulo_modal').html('Editar Producto');
    $('#productoModal').modal('show');
    LimpiarFormulario();
    $('#btn_crear').css('display', 'none');
    $('#btn_actualizar').removeAttr('hidden');
    let id = $(this).closest('tr').attr('id');
    ObtenerProducto(id);
});

$('#btn_actualizar').click(function () {
    if (ValidarFormulario()) {
        let nombre = $('#nombre').val();
        let descripcion = $('#descripcion').val();
        let precio = $('#precio').val();
        let id = $('#id_actualizar').val();

        $.ajax({
            url: "../../controlador/productoControlador.php",
            type: "POST",
            dataType: "json",
            data: {
                accion: 'ActualizarProducto',
                id: id,
                nombre: nombre,
                descripcion: descripcion,
                precio: precio
            },
            success: function (response) {
                let mensaje = response.mensaje;
                ListarProductos();
                $('#productoModal').modal('hide');
                if (mensaje == 'exito') {
                    Swal.fire({
                        position: "center",
                        icon: 'success',
                        title: 'Producto actualizado con éxito',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    $('#productoModal').modal('hide');
                }
            }
        });
    }

});

$('#btnNuevoProducto').click(function () {
    $('#titulo_modal').html('Crear Producto');
    $('#productoModal').modal('show');
    LimpiarFormulario();
    $('#btn_crear').css('display', 'block');
    $('#btn_actualizar').attr('hidden', 'true');
    $('#id_actualizar').val("");
});


$('#btn_crear').click(function () {
    if (ValidarFormulario()) {
        let nombre = $('#nombre').val();
        let descripcion = $('#descripcion').val();
        let precio = $('#precio').val();

        $.ajax({
            url: "../../controlador/productoControlador.php",
            type: "POST",
            dataType: "json",
            data: {
                accion: 'CrearProducto',
                nombre: nombre,
                descripcion: descripcion,
                precio: precio
            },
            success: function (response) {
                let mensaje = response.mensaje;
                ListarProductos();
                $('#productoModal').modal('hide');
                if (mensaje == 'exito') {
                    Swal.fire({
                        position: "center",
                        icon: 'success',
                        title: 'Producto creado con éxito',
                        showConfirmButton: false,
                        timer: 1500
                    });

                }

            }
        });

    }
});


function EliminarProducto(id) {
    $.ajax({
        url: "../../controlador/productoControlador.php",
        type: "POST",
        dataType: "json",
        data: { accion: 'EliminarProducto', id: id },
        success: function (response) {
            let mensaje = response.mensaje;

            ListarProductos();
            if (mensaje == 'exito') {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto eliminado con éxito',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    });

}

function ObtenerProducto(id) {
    $.ajax({
        url: "../../controlador/productoControlador.php",
        type: "POST",
        dataType: "json",
        data: { accion: 'ObtenerProducto', id: id },
        success: function (response) {
            console.log(response);
            let producto = response[0];
            $('#nombre').val(producto.nombre);
            $('#descripcion').val(producto.descripcion);
            $('#precio').val(producto.precio);
            $('#id_actualizar').val(producto.id);
        }
    });
}

function LimpiarFormulario() {
    $('#nombre').val('');
    $('#descripcion').val('');
    $('#precio').val('');
    $('#mensaje_nombre').text('');
    $('#mensaje_descripcion').text('');
    $('#mensaje_precio').text('');
}

function ValidarFormulario() {
    let nombre = $('#nombre').val()
    let descripcion = $('#descripcion').val()
    let precio = $('#precio').val()
    let hayErrores = true;

    $('#mensaje_nombre').text('');
    $('#mensaje_descripcion').text('');
    $('#mensaje_precio').text('');

    if (nombre === '') {
        $('#mensaje_nombre').text('El nombre es obligatorio.');
        hayErrores = false;
    }

    if (descripcion === '') {
        $('#mensaje_descripcion').text('La descripción es obligatoria.');
        hayErrores = false;
    }

    if (precio === '' || parseFloat(precio) <= 0) {
        $('#mensaje_precio').text('El precio debe ser un número mayor a 0.');
        hayErrores = false;
    } else if (isNaN(parseFloat(precio))) {
        $('#mensaje_precio').text('El precio debe ser un número.');
        hayErrores = false;
    }
    return hayErrores;
}