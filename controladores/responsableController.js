const Responsable = require("../modelos/responsableModel.js");

// Simulación de base de datos de responsables
let responsablesDB = [];

// Obtener todos los responsables
exports.getAll = (req, res) => {
    res.json(responsablesDB);
};

// Obtener un responsable por su ID
exports.getById = (req, res) => {
    const responsable = responsablesDB.find((r) => r.id === req.params.id);
    if (responsable) {
        res.json(responsable);
    } else {
        res.status(404).json({ mensaje: "Responsable no encontrado" });
    }
};

// Crear un nuevo responsable
exports.create = (req, res) => {
    const { id, numeroEmpleado, nombre, activosEnCustodia, imagen } = req.body;
    const nuevoResponsable = new Responsable(id, numeroEmpleado, nombre, activosEnCustodia, imagen);
    responsablesDB.push(nuevoResponsable);
    res.status(201).json({ mensaje: "Responsable creado exitosamente" });
};

// Actualizar un responsable existente
exports.update = (req, res) => {
    const responsableIndex = responsablesDB.findIndex((r) => r.id === req.params.id);
    if (responsableIndex !== -1) {
        const { numeroEmpleado, nombre, activosEnCustodia, imagen } = req.body;
        responsablesDB[responsableIndex] = {
            ...responsablesDB[responsableIndex],
            numeroEmpleado: numeroEmpleado || responsablesDB[responsableIndex].numeroEmpleado,
            nombre: nombre || responsablesDB[responsableIndex].nombre,
            activosEnCustodia: activosEnCustodia || responsablesDB[responsableIndex].activosEnCustodia,
            imagen: imagen || responsablesDB[responsableIndex].imagen,
        };
        res.json({ mensaje: "Responsable actualizado exitosamente" });
    } else {
        res.status(404).json({ mensaje: "Responsable no encontrado" });
    }
};

// Eliminar un responsable existente
exports.delete = (req, res) => {
    const responsableIndex = responsablesDB.findIndex((r) => r.id === req.params.id);
    if (responsableIndex !== -1) {
        responsablesDB.splice(responsableIndex, 1);
        res.json({ mensaje: "Responsable eliminado exitosamente" });
    } else {
        res.status(404).json({ mensaje: "Responsable no encontrado" });
    }
};
