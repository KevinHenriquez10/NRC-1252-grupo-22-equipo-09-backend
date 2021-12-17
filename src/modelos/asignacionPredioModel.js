const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asignacionPredioModel = new Schema({
    nombrePredio: {
    type: 'string',
    unique: true,
    required: true,
    },
    codigo: {
    type: 'number',
    unique: true,
    required: true,
    },
    nombre: {
    type: 'string',
    required: true,
    },
    apellido: {
    type: 'string',
    required: true,
    },
    identificacion: {
    type: 'number',
    required: true,
    },
    direccion: {
    type: 'string',
    required: true,
    },
    correo: {
    type: 'string',
    required: true,
    },
});

module.exports = mongoose.model('AsignacionPredio', asignacionPredioModel);