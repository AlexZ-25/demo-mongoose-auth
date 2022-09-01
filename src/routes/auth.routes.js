const { Router } = require('express');

const { registrarUsuario } = require('../controllers/auth.ctrl');

const router = Router();

router.post("/", registrarUsuario);

module.exports = router;