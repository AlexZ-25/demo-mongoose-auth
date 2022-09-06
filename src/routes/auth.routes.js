const { Router } = require('express');
const { registrarUsuario, login, verificarUsuario } = require('../controllers/auth.ctrl');
const { validarJWT } = require('../middleware/jwt.middleware');

const router = Router();

router.post("/", registrarUsuario);
router.post("/login", login);
router.get("/", validarJWT, verificarUsuario);

module.exports = router;