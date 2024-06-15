const yup = require ('yup')


const schema = yup.object().shape({
    nomedoFilme: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

        
        DataAquisicao: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),

    
    
        DataDevolucao: yup
        .string("Campo precisa ser uma String")
        .required("Campo obrigatório"),


    })

function validarAssinatura(req, res, next) {
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
                mensagem: "Falha na validação dos campos",
                erros
            })
        })
}


module.exports = {
    validarAssinatura
}