const Ubicacion = require("../modelos/ubicacionModel.js");

let ubicaciones = []; // Array para simular la persistencia de datos

// Obtener todas las ubicaciones
exports.getAll = (req, res) => {
    res.json(ubicaciones);
};

// Obtener una ubicacion por su ID
exports.getById = (req, res) => {
    const ubicacion = ubicaciones.find(ub => ub.id === req.params.id);
    if (ubicacion) {
        res.json(ubicacion);
    } else {
        res.status(404).json({ message: 'Ubicación no encontrada' });
    }
};

// Crear una nueva ubicacion
exports.create = (req, res) => {
    const { id, descripcion, imagen } = req.body;
    const nuevaUbicacion = new Ubicacion(id, descripcion, [], imagen);
    ubicaciones.push(nuevaUbicacion);
    res.status(201).json(nuevaUbicacion);
};

// Actualizar una ubicacion existente
exports.update = (req, res) => {
    const { id } = req.params;
    const { descripcion, imagen } = req.body;
    const ubicacionIndex = ubicaciones.findIndex(ub => ub.id === id);
    if (ubicacionIndex !== -1) {
        ubicaciones[ubicacionIndex] = {
            ...ubicaciones[ubicacionIndex],
            descripcion: descripcion || ubicaciones[ubicacionIndex].descripcion,
            imagen: imagen || ubicaciones[ubicacionIndex].imagen,
        };
        res.json(ubicaciones[ubicacionIndex]);
    } else {
        res.status(404).json({ message: 'Ubicación no encontrada' });
    }
};

// Eliminar una ubicacion existente
exports.delete = (req, res) => {
    const { id } = req.params;
    const ubicacionIndex = ubicaciones.findIndex(ub => ub.id === id);
    if (ubicacionIndex !== -1) {
        ubicaciones.splice(ubicacionIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Ubicación no encontrada' });
    }
};
