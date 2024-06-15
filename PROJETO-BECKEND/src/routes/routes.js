const express = require('express')

const router = express.Router()


// controllers
const ClienteController = require('../controllers/ClienteController')
const FilmeController = require('../controllers/FilmeController')
const FormadePagamentoController = require('../controllers/FormadePagamentoController')
const GeneroController = require('../controllers/GeneroController')
const AssinaturaController = require('../controllers/AssinaturaController')



//Validadores
const { validarCliente } = require('../validators/ClienteValidator')
const { validarLogin } = require('../validators/ClienteValidator')
const { validarId } = require("../validators/IdValidator")
const{ validarFilme } = require('../validators/validarFilme')
const { validarAssinatura } = require('../validators/AssinaturaValidator')
const { ValidarFormadePagamento } = require('../validators/FormadePagamentoValidator')
const { validarGenero } = require('../validators/GeneroValidator')


// Rotas Clientes
router.post('/clientes', validarCliente, ClienteController.registrar)
router.post('/login', validarLogin, ClienteController.login)
router.get('/clientes', ClienteController.buscarTodos)
router.get('/clientes/:id', validarId, ClienteController.buscarPorId)
router.put('/clientes/:id', validarId, validarCliente, ClienteController.atualizar)
router.delete('/clientes/:id', validarId, ClienteController.excluir)


// Rotas Filmes
router.post('/filmes', validarFilme, FilmeController.criarFilme)
router.get('/filmes', FilmeController.buscarTodosFilmes)
router.get('/filmes/:id', validarId, ClienteController.buscarPorId)
router.put('/filmes/:id', validarId, validarFilme, FilmeController.atualizarFilme)
router.delete('/filmes/:id', validarId, FilmeController.excluirFilme)



// Rotas Forma de Pagamento
router.post('/formapagamento', ValidarFormadePagamento, FormadePagamentoController.criar)
router.get('/formapagamento', FormadePagamentoController.buscarTodos)
router.get('/formapagamento/:id', validarId, ValidarFormadePagamento, FormadePagamentoController.buscarPorId)
router.put('/formapagamento/:id', validarId, ValidarFormadePagamento, FormadePagamentoController.atualizar)
router.delete('/formapagamento/:id', validarId, FormadePagamentoController.excluir)


router.post('/genero', validarGenero, GeneroController.criarGenero)
router.get('/genero', GeneroController.buscarTodosGeneros)
router.get('/genero/:id', validarId, GeneroController.buscarGeneroPorId)
router.put('/genero/:id', validarId, validarGenero, GeneroController.atualizarGenero)
router.delete('/genero/:id', validarId, GeneroController.excluirGenero)





// Rotas Assinatura
router.post('/assinatura', validarAssinatura, AssinaturaController.criarAssinatura)
router.get('/assinatura', AssinaturaController.buscarTodasAssinaturas)
router.get('/assinatura/:id', validarId, AssinaturaController.buscarAssinaturaPorId)
router.put('/assinatura/:id', validarId, validarAssinatura, AssinaturaController.atualizarAssinatura)
router.delete('/assinatura/:id', validarId, AssinaturaController.excluirAssinatura)


// Exportando Modulo
module.exports = router