const mongoose = require('mongoose')

const productoSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    texto: {
        type: String,
        required: [true, "Por favor teclea una descripción de la producto"]
    },
    completada: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Producto', productoSchema)