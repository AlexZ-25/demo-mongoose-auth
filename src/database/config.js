const mongoose = require("mongoose");

const dbConnection = () => {
    try {
        mongoose.connect(
            process.env.MONGODB_CONNECTIOn,
            // {
            //     useNewUrlParser: true,
            //     userUnifiedTopology: true,
            // }
        );
    
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        console.log('Autenticacion fallida');
    }
}

module.exports = { dbConnection };