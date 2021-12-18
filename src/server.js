const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Usuario = require('./modelos/usuarioModel');
const AsignacionArea = require("./modelos/asignacionAreaModel");
const ConfiguracionPredio = require("./modelos/asignacionPredioModel");
const Costos = require("./modelos/costosModel");
const { usuarioConfiguracionRutas } = require('./rutas/usuarioConfigRutas');
const {userRutas} = require("./rutas/userRutas")
require('dotenv').config();
const app = express();

app.use(cors()); // Middleware cors
app.use(express.json());  // convertir a Json

app.use("/usuarioConfiguracion", usuarioConfiguracionRutas);
app.use(userRutas);


//Conexión a la base de datos
mongoose.connect(process.env.URL_DATABASE)
  .then(res => console.log("conectado a la base de datos 🔥🔥"))
  .catch(error => console.log(error));


app.get('/', (req, res) => {
  res.send('Hola Mundo!');
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
- API Rest Configuracion Parametros
- Ruta: /usuarioGestion/asignarArea
- Metodo: POST
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/

app.post("/usuarioGestion/asignarArea",  (req, res) => {
  const data = req.body;
  const prod = new AsignacionArea(data);
  prod.save( (error) => {
    if (error){
      res.send({estado: "error", msg: "ERROR: producto no guardado! 😒"});
      return false;
    }
    res.send({estado: "ok", msg: "Producto Guardado! ✨"});
  })
});

/*
- API Rest Configuracion Parametros
- Ruta: /usuarioGestion/configuracionPredio
- Metodo: POST
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/

app.post("/usuarioGestion/configuracionPredio",  (req, res) => {
  const data = req.body;
  const prod = new ConfiguracionPredio(data);
  prod.save( (error) => {
    if (error){
      res.send({estado: "error", msg: "ERROR: producto no guardado! 😒"});
      return false;
    }
    res.send({estado: "ok", msg: "Producto Guardado! ✨"});
  })
});

app.post("/usuarioGestion/costos",  (req, res) => {
  const data = req.body;
  const prod = new Costos(data);
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


