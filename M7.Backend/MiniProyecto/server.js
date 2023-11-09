const express = require('express')
const productsRoutes = require('./routes/productsRoutes')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/miniProyecto/', productsRoutes)
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
