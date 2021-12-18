const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const configuracionModel = new Schema({
    vAgua: {
    type: 'number',
    required: true,
    },
    tipoSemilla: {
    type: 'string',
    required: true,
    },
    valorSemilla: {
    type: 'number',
    required: true,
    },
    fertilizante: {
    type: 'string',
    required: true,
    },
    valorFertilizante: {
    type: 'number',
    required: true,
    }
});

module.exports = mongoose.model('ConfiguracionParametros', configuracionModel);