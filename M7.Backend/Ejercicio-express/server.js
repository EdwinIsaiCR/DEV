//importar express
const express = require('express');

//Crear una aplicacion de express
const app= express();
const rutas = require('./routes/rutas')

//Configurar la aplicacion express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Crear las rutas de la aplicacion
app.get('/', (request, response) => {
    response.send('Hola api');
})

app.use('/api/', rutas)

//Levantar el servidor
app.listen(3000, ()=>{
    console.log("Escuchando en puerto 3000");
    });