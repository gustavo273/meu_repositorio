const express = require('express')
const app= express()
const PORT= 3000

const DBConnect = require('./db/connections')
DBConnect()


app.use(express.json())

const routes = require('../src/routes/routes')
app.use(routes)



app.listen(PORT, () => {
    console.log(`aplicação rodando na porta ${PORT}`)
})

