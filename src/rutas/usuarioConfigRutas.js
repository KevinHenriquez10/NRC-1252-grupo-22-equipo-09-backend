const { Router } = require("express");
const registroPredioModel = require("../modelos/registroPredioModel");
const usuarioConfiguracionRutas = Router();

/*
- API Rest Registro Predio
- Ruta: /usuarioConfiguracion/registro
- Metodo: POST
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/

usuarioConfiguracionRutas.post("/registro", (req, res) => {
    const data = req.body;
    const prod = new registroPredioModel(data);
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

usuarioConfiguracionRutas.post("/asignacionPredio",  (req, res) => {
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

usuarioConfiguracionRutas.post("/crearCultivo",  (req, res) => {
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

/*
- API Rest Configuracion Parametros
- Ruta: /usuarioConfiguracion/parametro
- Metodo: POST
- Respuesta: {estado: "ok", msg: "Producto Creado con exito!"}
*/

usuarioConfiguracionRutas.post("/parametro",  (req, res) => {
    const data = req.body;
    const prod = new ConfiguracionParametros(data);
    prod.save( (error) => {
        if (error){
            res.send({estado: "error", msg: "ERROR: producto no guardado! 😒"});
            return false;
        }
        res.send({estado: "ok", msg: "Producto Guardado! ✨"});
    })
});

exports.usuarioConfiguracionRutas = usuarioConfiguracionRutas;


