class Ubicacion {
    constructor(id, descripcion, activosAsociados, imagen) {
        this.id = id;
        this.descripcion = descripcion;
        this.activosAsociados = activosAsociados || [];
        this.imagen = imagen || null;
    }
}

module.exports = Ubicacion;
