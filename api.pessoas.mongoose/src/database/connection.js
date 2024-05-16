const mongoose = require('mongoose')

require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME


function main() {
    
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
       
        .then(() => console.log("conectado ao MongoDb"))
      
        .catch(err => console.log("Erro ao conectar no MongoDb: ", err))
}


module.exports = main

