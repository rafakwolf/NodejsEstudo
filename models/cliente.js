module.exports = function () {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;
    
    var cliente = new Schema({
        nome: String,
        sobrenome: String,
        dataNascimento: Date,
        dataCadastro: { type: Date, default: Date.now },
        cidade : String,
        estado: String,
        endereco: String
    });
    
    return mongoose.model("Clientes", cliente);
}
