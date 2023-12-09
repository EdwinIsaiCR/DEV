const asyncHandler = require('express-async-handler')
const Articulo = require('../model/articulosModel')

const getArticulos = asyncHandler( async (req, res) =>{
    const articulo = await Articulo.find()
    res.status(200).json(articulo)
})

const setArticulos = asyncHandler( async (req, res) => {
    if(!req.body){
        res.status(400).json({message: "Por favor ingrese algo"})
    }
    const articulo = await Articulo.create({
        nombre: req.body.nombre,
        precio: req.body.precio,
        existencias: req.body.existencias
    })
    res.status(201).json({articulo})
})

const updateArticulos = asyncHandler( async (req, res) => {
    const articulo= await Articulo.findById(req.params.id)
    if(!articulo){
        res.status(400).json('El articulo no fue encontrado')
    }
    const articuloUpdated = await Articulo.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(articuloUpdated)

})

const deleteArticulos = asyncHandler( async (req, res) => {
    const articulo= await Articulo.findById(req.params.id)
    if(!articulo){
        res.status(400).json('El articulo no fue encontrado')
    }
    await Articulo.deleteOne(articulo)
    res.status(200).json({id: req.params.id})
    
})

module.exports = {
    getArticulos,
    setArticulos,
    updateArticulos,
    deleteArticulos
}