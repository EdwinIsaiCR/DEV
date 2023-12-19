const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    },
    pedido: {
        type: String,
        required: [true, "Por favor teclea el producto que estara en el pedido"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Pedido', pedidoSchema)