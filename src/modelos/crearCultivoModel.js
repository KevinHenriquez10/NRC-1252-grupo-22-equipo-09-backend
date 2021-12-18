const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crearCultivoModel = new Schema({
    area: {
    type: 'number',
    required: true,
    },
    cSemilla: {
    type: 'number',
    required: true,
    },
    tiempoCultivo: {
    type: 'number',
    required: true,
    },
    cAgua: {
    type: 'number',
    required: true,
    },
    cFertilizante: {
    type: 'number',
    required: true,
    },
    tRecoleccion: {
    type: 'number',
    required: true,
    },
    cRecolectado: {
    type: 'number',
    required: true,
    },
    tCultivo: {
    type: 'string',
    required: true,
    }
});

module.exports = mongoose.model('CrearCultivo', crearCultivoModel);