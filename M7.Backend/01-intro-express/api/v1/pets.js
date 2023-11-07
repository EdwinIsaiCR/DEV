const express = require('express');
//Router es un objeto que nos deja crear rutas
const router = express.Router();
//importar el modelo o estructura de pets
const petList = require('../../petsData.js');

//Crear la ruta GET
router.get('/api/v1/pets', (request, response)=>{
    console.log('Query params', request.query);
    const {age, type } = request.query
    if(!age && !type){
        response.status(200).send(petList)
        return
    }
    const filteredPets = petList.pets.filter((pet) => {
        return pet.age == age || pet.type == type
    })
    response.status(200).send(filteredPets)
    return
})

router.get('/api/v1/pets/:id', (request, response)=>{
    console.log('Params', request.params);
    const onePet = petList.pets.find((pet)=> pet.id == request.params.id)

    onePet ? response.status(200).send(onePet) :
    response.status(404).send({message: 'No se ha encontrado al pet con ese id'});
})

module.exports = router