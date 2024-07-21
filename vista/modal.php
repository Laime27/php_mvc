<div class="modal fade" id="productoModal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="titulo_modal"></h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre">
                    <span id="mensaje_nombre" class="form-text text-danger"></span>
                </div>

                <div class="mb-3">
                    <label for="descripcion" class="form-label">Descripción</label>
                    <textarea class="form-control" id="descripcion" rows="3"></textarea>
                    <span id="mensaje_descripcion" class="form-text text-danger"></span>
                </div>

                <div class="mb-3">
                    <label for="precio" class="form-label">Precio</label>
                    <div class="input-group">
                        <span class="input-group-text">$</span>
                        <input type="" class="form-control" id="precio" >
                    </div>
                    <span id="mensaje_precio" class="form-text text-danger"></span>
                </div>

            </div>
            <div class="modal-footer">
                <input hidden value="" id="id_actualizar">

                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success" id="btn_crear">Crear Producto</button>
                <button type="button" class="btn btn-primary" id="btn_actualizar" hidden>Actualizar Producto</button>
            </div>
        </div>
    </div>
</div>