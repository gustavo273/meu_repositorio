// Então, nos outros exemplos atualizamos pelo id, nesse caso, hoje atualizei buscando pelo nome.

const express = require('express')
const router = express.Router()

// criando banco de dados local
// criando cada pessoa como objeto e atributos
const listaPessoas = [{
    nome: "Gustavo",
    idade: 25,
    email: "gustavo.h.lima@iesb.edu.br",
    telefone: "61995816767"
}, {
    nome: "Giovanna",
    idade: 23,
    email: "giovannag@mail.com",
    telefone: "61999789799"
}
]

// BUSCANDO TODAS AS PESSOAS (READ)
router.get('/pessoas', (req, res) => {
    res.json(listaPessoas)
})

// PELO nome (READ)
router.get('/pessoas/:nome', (req, res) => {
    const nome = req.params.nome
    const pessoa = listaPessoas.find(pessoa => pessoa.nome == nome)
    res.json(pessoa)
})

// CRIANDO NOVA PESSOA (CREATE)
router.post('/pessoas', (req, res) => {
    const dadosPessoa = req.body
    const novaPessoa = {
        nome: dadosPessoa.nome,
        idade: dadosPessoa.idade,
        email: dadosPessoa.email,
        telefone: dadosPessoa.telefone
    }

    // incluindo pessoa na listaPessoas
    listaPessoas.push(novaPessoa)
    res.json({
        mensagem: "pessoa criada"
    })
})

// UPDATE => ATUALIZANDO DADOS DE UMA PESSOA
router.put('/pessoas/:nome', (req, res) => {
    const nome = req.params.nome
    const novosDados = req.body
    // buscando os dados atualizados 
    const index = listaPessoas.findIndex(pessoa => pessoa.nome == nome)
    const dadosAtualizados = {
        nome: novosDados.nome,
        idade: novosDados.idade,
        email: novosDados.email,
        telefone: novosDados.telefone
    }
    listaPessoas[index] = dadosAtualizados
    res.json({
        mensagem: "dados alterados com sucesso"
    }
    )
})

// DELETANDO PESSOA
router.delete('/pessoas/:nome', (req, res) => {
    const nome = req.params.nome
    const index = listaPessoas.findIndex(pessoa => pessoa.nome == nome)
    listaPessoas.splice(index, 1)
    res.json({mensagem: "pessoa excluida com sucesso"})
})
 



module.exports = router