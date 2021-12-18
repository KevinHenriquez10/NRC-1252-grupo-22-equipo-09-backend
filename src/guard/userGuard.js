const { verify } = require("jsonwebtoken");

function userGuard(req, res, next){
    // Captura la cabecera Authorization
    const authorization = req.headers.authorization;
    if (!authorization){
        next(res.status(403).json({estado: "error", msg: "NO autorizado"}));
    }
    // Pregunta si tiene esa cabecera
    try {
        const token = authorization.split(" ")[1];
        const payload = verify(token, process.env.JWT_SECRET_KEY);
        if (payload.rol !== "administrador"){
            next(res.status(403).json({estado:"error", msg: "NO Autorizado"}))
        }
    } catch (error) {
        console.log(error);
    }
    next();
    // Verificar el Token, con la clave
    // Rechazamos / Next
}

exports.userGuard = userGuard;