const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
})
