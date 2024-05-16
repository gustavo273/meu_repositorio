const Pessoa = require('../models/pessoa')

async function criar(req, res) {
    const pessoa = new Pessoa(req.body)
    const pessoaCriada = await pessoa.save()
    res.status(201).json(pessoaCriada)
}


module.exports = {
    criar
}