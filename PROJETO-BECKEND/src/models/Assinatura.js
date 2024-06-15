
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    

    nomedoFilme: {
        type: String,
        required: true
    }, 
    
    DataAquisicao: {
        type: String,
        required: true
    },

    DataDevolucao: {
        type: String,
        required: true
    },


    
}, { timestamps: true }) 


const Assinatura = mongoose.model('Assinatura', schema)

module.exports = Assinatura