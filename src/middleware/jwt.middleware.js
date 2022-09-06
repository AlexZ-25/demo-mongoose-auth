const jwt = require('jsonwebtoken');
const User = require('../models/user');

const validarJWT = async (req, res, next) => {
    const token = req.header("x-auth-token");

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: "No hay token, permiso inválido",
        });
    };

    try {
        console.log(process.env.SECRET);
        const {id}  = jwt.verify(token, process.env.SECRET);
        console.log(id);
        const usuario = await User.findById(id)

        if (!usuario) {
            return res.status(401).json({
                ok: false,
                msg: "No hay token, permiso inválido",
            });
        };

        req.usuario = usuario;
        next();
    } catch (err) {
        return res.status(500).json({
            ok: false,
            msg: "Error en el servidor",
        });
    }

};

module.exports = {
    validarJWT,
}