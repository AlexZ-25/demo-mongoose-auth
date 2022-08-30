//const { v4: uuid } = require("uuid");
const Product = require("../models/product")

const getProducts = async (req, res) => {
    const productos = await Product.find();

    return res.json({
        msg: "Se obtuvieron los productos",
        data: productos,
    });
};

const postProduct = async (req, res) => {
    const { name, description, price } = req.body;

    const producto = {
        name: name,
        description: description,
        price: price,
    };

    const nuevoProducto = await Product.create(producto);

    return res.json({
        msg: `Se creó un nuevo usuario llamado ${nuevoProducto.name}`,
        data: nuevoProducto,
    });
};

const putProduct = async (req, res) => {
    // Obtener el id desde el url
    const { id } = req.params;
    // Lo que quieres actualizar
    const { price } = req.body;

    const actualizar = {
        price: price,
    }

    const productoActualizado = await Product.findByIdAndUpdate(id, actualizar,
        // Este parámetro permite que se devuelva el objeto ya actualizado
        { new: true });

    return res.json({
        msg: `Se actualizó un producto llamado ${productoActualizado.name}`,
        data: productoActualizado,
    });
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;

    const productoEliminado = await Product.findByIdAndRemove(id);

    return res.json({
        msg: `Se eliminó un producto llamado ${productoEliminado.name}`,
        data: productoEliminado,
    })
}

module.exports = {
    getProducts,
    postProduct,
    putProduct,
    deleteProduct,
}