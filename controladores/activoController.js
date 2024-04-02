const activoModel = require("../modelos/activoModel.js");

// Simulación de una base de datos en memoria
let activos = [];

// Obtener todos los activos
exports.getAll = (req, res) => {
    res.json(activos);
};

// Obtener un activo por su ID
exports.getById = (req, res) => {
    const id = req.params.id;
    const activo = activos.find(activo => activo.id === id);
    if (activo) {
        res.json(activo);
    } else {
        res.status(404).json({ message: "Activo no encontrado" });
    }
};

// Crear un nuevo activo
exports.create = (req, res) => {
    const nuevoActivo = req.body;
    activos.push(nuevoActivo);
    res.status(201).json(nuevoActivo);
    };


// Actualizar un activo existente
exports.update = (req, res) => {
    const id = req.params.id;
    const indice = activos.findIndex(activo => activo.id === id);
    if (indice !== -1) {
        activos[indice] = req.body;
        res.json(activos[indice]);
    } else {
        res.status(404).json({ message: "Activo no encontrado" });
    }
};

// Eliminar un activo existente
exports.delete = (req, res) => {
    const id = req.params.id;
    activos = activos.filter(activo => activo.id !== id);
    res.status(204).send();
};