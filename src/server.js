const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const Productos = require("./modelos/productosModel");
const app = express();

app.use(cors()); // Middleware cors
app.use(express.json());  // convertir a Json

//Conexión a la base de datos
mongoose.connect("mongodb://127.0.0.1:27017/comercio")
  .then(res => console.log("conectado a la base de datos"))
  .catch(error => console.log(error));


app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

/*
- API Rest Crear Registro
- Ruta: /usuarioConfiguracion/registro
- Metodo: POST
- Datos de entrada: {nombre_predio: "baranoa", codigo: 001, area: "rural", latitud: 102, longitud: 203}
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/
app.post("/usuarioConfiguracion/registro", function (req, res) {
    const data = req.body;
    const prod = new Comercial(data);
    prod.save( function (error) {
      if (error){
        res.send({estado: "error", msg: "ERROR: producto no guardado! "});
        return false;
      }
      res.send({estado: "ok", msg: "Producto Guardado! "});
    })
})


app.listen(8080, () => {
    console.log("servidor escuchando en el puerto 8080...")
});


