const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registroPredioModel = new Schema({
    nombre: {
    type: 'string',
    unique: true,
    required: true,
    },
    codigo: {
    type: 'number',
    unique: true,
    required: true,
    },
    area: {
    type: 'number',
    required: true,
    },
    latitud: {
    type: 'number',
    required: true,
    },
    longitud: {
    type: 'number',
    required: true,
    },
});

module.exports = mongoose.model('RegistroPredio', registroPredioModel);
