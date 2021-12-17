const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioModel = new Schema({
    nombre:{
        type: 'string',
        required: true
    },
    apellido:{
        type: 'string',
        required: true
    },
    tipoDocumento:{
        type: 'string',
        required: true
    },
    documento:{
        type: 'number',
        unique: true,
        required: true
    },
    correo:{
        type: 'string',
        unique: true,
        required: true
    },
    telefono:{
        type: 'number',
        required: true
    },
    sexo:{
        type: 'string',
        required: true
    },
    rol:{
        type: 'string',
        required: true
    }
});

module.exports = mongoose.model('Usuario', usuarioModel)