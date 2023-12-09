const express = require('express')
const router = express.Router()
const {getProductos, setProductos, updateProductos, deleteProductos} = require('../controllers/productosController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getProducto).post(protect, setProducto)
router.route('/:id').put(protect, updateProducto).delete(protect, deleteProducto)

/* router.get('/', getTareas)

router.post('/', setTareas)

router.put('/:id', updateTareas)

router.delete('/:id', deleteTareas) */

module.exports = router