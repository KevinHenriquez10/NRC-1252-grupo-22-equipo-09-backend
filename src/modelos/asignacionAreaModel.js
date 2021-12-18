const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asignacionAreaModel = new Schema({
    idCultivo: {
        type: 'number',
        unique: true,
        required: true,
        },
    tipoCultivo: {
        type: 'string',
        required: true,
        },
    producto: {
        type: 'string',
        required: true,
        },
    areaAsignada: {
        type: 'number',
        required: true,
        },
    canSemilla: {
        type: 'number',
        required: true,
        },
    tiempoCultivo: {
        type: 'number',
        required: true,
        },
    canAgua: {
        type: 'number',
        required: true,
        },
    canFertilizante: {
        type: 'number',
        required: true,
        },
    kgRecogidos: {
        type: 'number',
        required: true,
        },
    tiempoEspera: {
        type: 'number',
        required: true,
        },
    fechaSiembra: {
        type: 'date',
        required: true,
        },
    fechaRecogida: {
        type: 'date',
        required: true,
        }
});

module.exports = mongoose.model('AsignacionArea', asignacionAreaModel);