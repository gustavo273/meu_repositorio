const mongoose = require('mongoose')

const shema = new mongoose.Schema({
nome: {
    
    type:String,
    required:true
}


},{timestamps:true})

const Pessoa = mongoose.model('pessoa', shema)

module.exports=Pessoa