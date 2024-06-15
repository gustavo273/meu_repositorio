const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000


app.use(express.json())


mongoose.connect(`mongodb+srv://gustavohlima:1mwkkhEL64JSAV9f@cluster0.9zqgaqp.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch(err => console.log("Erro ao conectar no MongoDB: ", err))


    const autenticacaoRoutes = require('./routes/autenticacaoroutes')
    app.use(autenticacaoRoutes)

const { checkToken } = require('./validators/AutenticacaoValidator')

const routes = require('./routes/routes')
app.use(checkToken, routes)


app.listen(PORT, () => {
    console.log(`aplicação rodando na porta ${PORT}`)
})

