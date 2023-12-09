const express = require('express')
const router = express.Router()
const {getTickets, setTickets, updateTickets, deleteTickets} = require('../controllers/ticketsController')

router.route('/').get(getTickets).post(setTickets)
router.route('/:id').put(updateTickets).delete(deleteTickets)

module.exports = router