const express = require('express')
const router = express.Router()
const {getArticulos, setArticulos, updateArticulos, deleteArticulos} = require('../controllers/articulosController')

router.route('/').get(getArticulos).post(setArticulos)
router.route('/:id').put(updateArticulos).delete(deleteArticulos)

module.exports = router