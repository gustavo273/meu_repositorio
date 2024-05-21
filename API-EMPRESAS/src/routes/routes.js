const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoControllers') 
const DepartamentoController = require('../controllers/departamentoController')


const { validarId } = require('../validator/IDValidator')
const { cargoValidador } = require('../validator/cargoValidator')
const { departamentoValidador } = require('../validator/departamentoValidator')



router.post('/cargos', CargoValidador, CargoController.create)
router.get('/cargos', CargoController.getAll)
router.get('/cargos/:id', validarId, CargoController.getById)
router.put('/cargos/:id', validarId, cargoValidador, CargoController.update)
router.delete('/cargos/:id', validarId, CargoController.remove)


rrouter.post('/departamentos', departamentoValidador, DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id', validarId, DepartamentoController.getById)
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.update)
router.delete('/departamentos/:id', validarId, DepartamentoController.remove)




module.exports = router
