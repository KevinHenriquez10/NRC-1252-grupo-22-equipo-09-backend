const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const costosModel = new Schema({
    canSemilla: {
    type: 'number',
    required: true,
    },
    valorSemilla: {
    type: 'number',
    required: true,
    },
    canFertilizante: {
    type: 'number',
    required: true,
    },
    valorFertilizante: {
    type: 'number',
    required: true,
    },
    canAgua: {
    type: 'number',
    required: true,
    },
    valorAgua: {
    type: 'number',
    required: true,
    }
});

module.exports = mongoose.model('Costos', costosModel);