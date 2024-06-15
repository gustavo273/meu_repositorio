
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    } 
    
}, { timestamps: true })

//CRIANDO MODELO PRA COLLECTION (entidade/model)
const FormadePagamento = mongoose.model('formadepagamento', schema)

// EXPORTANDO MÓDULO
module.exports = FormadePagamento