const express = require('express')
<<<<<<< HEAD
=======
const homeRoutes = require('./routes/homeRoutes')
>>>>>>> 01a30bf09c6d44cdceed6eb54887e0839cc3fe61

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

<<<<<<< HEAD
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
=======
app.use('/api/v1', homeRoutes)
app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000')
>>>>>>> 01a30bf09c6d44cdceed6eb54887e0839cc3fe61
})
