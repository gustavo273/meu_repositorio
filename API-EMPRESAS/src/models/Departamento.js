const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

const departamento = mongoose.model('departamento', schema)

module.exports = departamento