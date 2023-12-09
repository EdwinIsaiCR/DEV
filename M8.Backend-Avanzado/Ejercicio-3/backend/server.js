const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 500
const connectDB = require('./config/db')

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/articulos', require('./routes/articulosRoutes'))
app.use('/api/tickets', require('./routes/ticketsRoutes'))

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))