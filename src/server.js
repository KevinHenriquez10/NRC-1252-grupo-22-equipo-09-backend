const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RegistroPredio = require('./modelos/registroPredioModel');
const Usuario = require('./modelos/usuarioModel');
const AsignacionPredio = require('./modelos/asignacionPredioModel');
const CrearCultivo = require("./modelos/crearCultivoModel")
require('dotenv').config();
const app = express();

app.use(cors()); // Middleware cors
app.use(express.json());  // convertir a Json

//Conexión a la base de datos
mongoose.connect(process.env.URL_DATABASE)
  .then(res => console.log("conectado a la base de datos 🔥🔥"))
  .catch(error => console.log(error));


app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

/*
- API Rest Registro Predio
- Ruta: /usuarioConfiguracion/registro
- Metodo: POST
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/

app.post("/usuarioConfiguracion/registro", (req, res) => {
  const data = req.body;
  const prod = new RegistroPredio(data);
  prod.save( (error) => {
    if (error){
      res.send({estado: "error", msg: "ERROR: producto no guardado! 😒"});
      return false;
    }
    res.send({estado: "ok", msg: "Producto Guardado! ✨"});
  })
});

/*
- API Rest Registro Usuario
- Ruta: /administrador/registro
- Metodo: POST
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/

app.post("/administrador/registro", (req, res) => {
  const data = req.body;
  const prod = new Usuario(data);
  prod.save( (error) => {
    if (error){
      res.send({estado: "error", msg: "ERROR: producto no guardado! 😒"});
      return false;
    }
    res.send({estado: "ok", msg: "Producto Guardado! ✨"});
  })
});

/*
- API Rest Asignación Predio
- Ruta: /usuarioConfiguracion/asignacionPredio
- Metodo: POST
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/

app.post("/usuarioConfiguracion/asignacionPredio",  (req, res) => {
  const data = req.body;
  const prod = new AsignacionPredio(data);
  prod.save( (error) => {
    if (error){
      res.send({estado: "error", msg: "ERROR: producto no guardado! 😒"});
      return false;
    }
    res.send({estado: "ok", msg: "Producto Guardado! ✨"});
  })
});

/*
- API Rest Crear Cultivo
- Ruta: /usuarioConfiguracion/crearCultivo
- Metodo: POST
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/

app.post("/usuarioConfiguracion/crearCultivo",  (req, res) => {
  const data = req.body;
  const prod = new CrearCultivo(data);
  prod.save( (error) => {
    if (error){
      res.send({estado: "error", msg: "ERROR: producto no guardado! 😒"});
      return false;
    }
    res.send({estado: "ok", msg: "Producto Guardado! ✨"});
  })
});


app.listen(8080, () => {
    console.log("servidor escuchando en el puerto 8080...")
});


