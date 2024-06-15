
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


const Genero = mongoose.model('genero', schema)

module.exports = Genero