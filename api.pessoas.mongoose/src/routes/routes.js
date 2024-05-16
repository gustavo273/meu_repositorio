const express = require('express')

const router = express.Router()

const pessoaControlle = require('../controllers/pessoaController')

router.post('/pessoas', pessoaControlle.criar)

module.exports=router