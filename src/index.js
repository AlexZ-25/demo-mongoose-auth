// 1. IMPORTACIONES
require("dotenv").config();
const express = require("express");
const {dbConnection} = require("./database/config")
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

dbConnection();

// 2. MIDDLEWARES
app.use(cors());
app.use(express.json());

// 3. RUTAS
app.get("/", (req, res) => {
  return res.json({
    message: "Hola mundo",
    autor: process.env.AUTOR,
    secret: process.env.SECRET,
  });
});
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/libros", require("./routes/libros.routes"));
app.use("/api/products", require("./routes/products.routes"));
app.use("/api/auth", require("./routes/auth.routes"));

// 4. SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor en linea en el puerto ${PORT}`);
});
