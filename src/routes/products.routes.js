const { Router } = require("express");

const { getProducts, postProduct, putProduct, deleteProduct } = require("../controllers/products.ctrl");

const { validarJWT } = require('../middleware/jwt.middleware');

const router = Router();

router.get("/", validarJWT, getProducts);

router.post("/", postProduct);

router.put("/:id", putProduct);

router.delete("/:id", deleteProduct);

module.exports = router;