const mongoose = require('mongoose')

const ticketsSchema = mongoose.Schema({
    subtotal:{
        type:Number,
        required:[true,'Por favor teclea el subtotal']
    },
    iva:{
        type:Number,
        required:[true,'Por favor teclea el total']
    },
    total:{
        type:Number,
        required:[true,'Por favor teclea el total']
    },
    articulos:{
        type:Number,
        required:[true,'Por favor teclea el numero de articulos']
    },
    usuario:{
        type:Number,
        required:[true,'Por favor teclea el usuario']
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Ticket', ticketsSchema)