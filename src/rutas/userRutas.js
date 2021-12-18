const {Router} = require("express");
const userRutas = Router();
const { userModel } = require("../modelos/userModel");
const { compare } = require("bcrypt");
const {sign} = require("jsonwebtoken");
const {userGuard} = require("../guard/userGuard");

userRutas.post("/login", async (req, res) => {
    // Captura el Usuario / Password
    const { usuario, password } = req.body;
    // Buscar en BD el usuario
    const user = await userModel.findOne({usuario});
    // Preguntar si existe el usuario
    if (!user){
        return res.status(401).send({estado: "error", msg:"Credenciales invalidas 🤨🤨"});
    }
    // Comparar el Password BCRYPT
    const passOK = await compare(password, user.password);
    if (passOK == true){
        const token = sign(
            {
                usuario: user.usuario,
                rol: user.rol
            },
            process.env.JWT_SECRET_KEY
        )
        return res.status(200).send({estado: "OK", msg:"Bienvenido! 😎😎 ", token});
    }
    return res.status(401).send({estado: "error", msg:"Credenciales invalidas 🤨🤨"});
    // Responder OK / Error
});

userRutas.post("/save", userGuard, function (req, res) {
    // Captura los datos
    const data = req.body;
    // Instancia el modelo
    const user = new userModel(data);
    // Guarda en DB
    user.save( function (error) {
        if (error){
            console.log(error);
            return res.status(500).send({estado: "error", msg:"Error Usuario no guardado 🤨🤨"});
        }
    return res.status(200).send({estado: "OK", msg:"Usuario Guardado con Éxito 😎😎"});
    //Responde OK/Error
    });
})

exports.userRutas = userRutas;