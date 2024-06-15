const yup = require('yup')


const schema = yup.object().shape({
    titulo: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

    descricao: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

    categoria: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

    duracao: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),
    
    preco: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),



    
})

function validarFilme(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            const erros = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json({
                mensagem: "Falha na valdiação dos campos",
                erros
            })
        })
}


module.exports = {
    validarFilme
}