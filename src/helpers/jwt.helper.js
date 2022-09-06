const jwt = require('jsonwebtoken');

// Si id es undefined, se le asigna el valor de "". Ejemplo valor = edad || "12345"
const generarJWT = async (id = "") => {
    return new Promise((resolve, reject) => {
        const payload = { id };

        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: '4h',
            },
            (err, token) => {
                if (err) {
                    reject("No se pudo generar el token");
                } else {
                    resolve(token);
                };
            }
        );
    });
};

module.exports = {
    generarJWT,
}