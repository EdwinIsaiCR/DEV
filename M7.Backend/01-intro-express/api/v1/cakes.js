const express = require('express');
//Router es un objeto que nos deja crear rutas
const router = express.Router();

router.patch('/api/v1/cakes/:cakeId', (request, response)=>{
    const { cakeId } = request.params
    if(cakeId > 100){
        response.status(401).send({
            message: 'Cake not found'
        })
    } else {
        const mensaje = {
            id: `El id del pastes es ${cakeId}`
        }
        response.status(207).send(mensaje)
    }
    response.send(cakeId)
})

module.exports = router