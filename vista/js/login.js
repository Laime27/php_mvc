

$('#btn_login').click(function () {

    if (validar()) {
        let correo = $('#correo').val();
        let clave = $('#clave').val();

        $.ajax({
            url: "../../controlador/loginControlador.php",
            type: "POST",
            dataType: "json",
            data: { accion: 'Verificar_usuario', correo: correo, clave: clave },
            success: function (response) {
                let mensaje = response.mensaje;

                if (mensaje == "exito") {
                    window.location.href = "../vista/producto.php";
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Correo o contraseña incorrecta",
                        showConfirmButton: false,
                        timer: 1200
                    });

                    $('#clave').val('');
                }

            }

        });
    }
});


function validar() {
    let correo = $('#correo').val();
    let clave = $('#clave').val();
    let expresion = /\w+@\w+\.+[a-z]/;
    let error = true;

    $('#error_correo, #error_clave').text("");

    if (correo == "") {
        $('#error_correo').text("El campo correo es obligatorio");
        error = false;
    } else if (!expresion.test(correo)) {
        $('#error_correo').text("El correo no es valido");
        error = false;
    }

    if (clave == "") {
        $('#error_clave').text("El campo clave es obligatorio");
        error = false;
    }

    return error;
}
