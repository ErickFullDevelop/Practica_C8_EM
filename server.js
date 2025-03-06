const express = require('express')
const conexion = require('./app/config/db.config.js')
const userRoutes = require('./app/routes/user.routes.js')
const bootcampRoutes = require('./app/routes/bootcamp.routes.js')

const app = express()// Inicio Express
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', userRoutes, bootcampRoutes)

app.get('/', (req, res) => {
  res.send('¡El servidor está corriendo!')
});

(async () => {
  try {
    await conexion.sync({ alter: true })
    console.log('conectado correctamente')
   
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error.message)
  }
})()
