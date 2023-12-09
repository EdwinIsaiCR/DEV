const asyncHandler = require('express-async-handler')
const Ticket = require('../model/ticketsModel')

const getTickets = asyncHandler( async (req, res) =>{
    const tickets = await Ticket.find()
    res.status(200).json(tickets)
})

const setTickets = asyncHandler( async (req, res) => {
    if(!req.body){
        res.status(400).json({message: "Por favor ingrese algo"})
    }
    const tickets = await Ticket.create({
        subtotal: req.body.subtotal,
        iva: req.body.iva,
        total: req.body.total,
        articulos: req.body.articulos,
        usuario: req.body.usuario
    })
    res.status(201).json({tickets})
})

const updateTickets = asyncHandler( async (req, res) => {
    const tickets= await Ticket.findById(req.params.id)
    if(!tickets){
        res.status(400).json('El ticket no fue encontrado')
    }
    const ticketsUpdated = await Ticket.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(ticketsUpdated)

})

const deleteTickets = asyncHandler( async (req, res) => {
    const tickets= await Ticket.findById(req.params.id)
    if(!tickets){
        res.status(400).json('El ticket no fue encontrado')
    }
    await Ticket.deleteOne(tickets)
    res.status(200).json({id: req.params.id})
    
})


module.exports = {
    getTickets,
    setTickets,
    updateTickets,
    deleteTickets
}