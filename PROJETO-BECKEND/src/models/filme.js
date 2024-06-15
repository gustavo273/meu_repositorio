
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    }, 
    
    descricao: {
        type: String,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    duracao: {
        type: String,
        required: true
    },

    preco: {
        type: String,
        required: true 
    }
    
}, { timestamps: true })


const Filme = mongoose.model('Filmes', schema)

module.exports = Filme