const express = require('express')
const router = express.Router()
const prudctsController = require('../controllers/productsController')
router.post('/products', prudctsController.createProducts)
router.get('/products', prudctsController.findAllProducts)
router.get('/products/:idProduct', prudctsController.findOneProduct)
router.patch('/products/:idProduct', prudctsController.updateOneProduct)
router.delete('/products/destroy/:idProduct', prudctsController.destroyOneProduct)
module.exports = router
