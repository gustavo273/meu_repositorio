// configurando express
const express = require('express')
const app = express()

// intermediario
app.use(express.json())

// importando ROTAS
const pessoasRouter = require("./routes/pessoas")
app.use(pessoasRouter)

// endereço da aplicação
app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000")
})