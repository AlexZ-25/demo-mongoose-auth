const { Schema, model } = require('mongoose');

const ProductSchema = Schema({
    name: {
        type: String,
        require: [true, "El nombre es requerido"],
        unique: true,
    },
    description: {
        type: String,
        default: "No definido",
    },
    price: {
        type: Number,
    },
})

//Siempre en singular porque por default pone una S al final
module.exports = model("product", ProductSchema);