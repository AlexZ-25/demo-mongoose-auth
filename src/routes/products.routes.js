const { Router } = require("express");

const { getProducts, postProduct, putProduct, deleteProduct } = require("../controllers/products.ctrl");

const router = Router();

router.get("/", getProducts);

router.post("/", postProduct);

router.put("/:id", putProduct);

router.delete("/:id", deleteProduct);

module.exports = router;