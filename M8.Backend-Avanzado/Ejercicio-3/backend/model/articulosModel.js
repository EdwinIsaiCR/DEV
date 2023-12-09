const mongoose = require('mongoose')

const articuloSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor teclea una descripción del articulo"]
    },
    precio: {
        type: Number,
        required: [true, "Por favor teclea un precio del articulo"]
    },
    existencias: {
        type: Number,
        required: [true, "Por favor teclea una existencia del articulo"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Articulo', articuloSchema)