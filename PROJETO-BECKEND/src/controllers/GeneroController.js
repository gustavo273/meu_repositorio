// IMPORTANDO O MODELO DE GENERO
const Genero = require('../models/genero');

// CRIANDO UM GENERO
async function criarGenero(req, res) {

    const { nome, descricao } = req.body;

    // Verificando se o genero já existe
    const generoExistente = await Genero.findOne({ nome });
    if (generoExistente) {
        return res.status(400).json({ mensagem: "Este genero já está cadastrado" });
    }

    // Criando novo genero
    const novoGenero = new Genero({
        nome,
        descricao
    });

    // Salvando o genero no banco de dados
    await novoGenero.save();

    // Retornando mensagem de sucesso e detalhes do genero criado
    res.status(201).json({ mensagem: "Genero cadastrado com sucesso!", novoGenero });
}

// BUSCAR TODOS OS GENEROS
async function buscarTodosGeneros(req, res) {
    const genero = await Genero.find();
    res.json(genero);
}

// BUSCAR FILME POR ID
async function buscarGeneroPorId(req, res) {
    const genero = await Genero.findById(req.params.id);
    if (genero) {
        res.json(genero);
    } else {
        res.status(404).json({ mensagem: "genero não encontrado" });
    }
}

// ATUALIZAR GENERO
async function atualizarGenero(req, res) {
    // Obtendo ID do genero
    const idGenero = req.params.id;

    // Obtendo o genero atual
    const generoAtual = await Genero.findById(idGenero);

    // Verificando se o filme foi encontrado
    if (!generoAtual) {
        return res.status(404).json({ mensagem: 'Genero não encontrado' });
    }

    // Extraindo as novas informações do filme
    const { nome, descricao } = req.body;

    // Atualizando o filme
    const generoAtualizado = await Genero.findByIdAndUpdate(idGenero, {
        nome, 
        descricao
    }, { new: true });

    // Verificando se a atualização deu certo
    if (!generoAtualizado) {
        return res.status(500).json({ mensagem: 'Erro ao atualizar genero' });
    }

    // Retornando o filme atualizado
    res.json({ mensagem: 'genero atualizado com sucesso!', generoAtualizado });
}

// EXCLUIR GENERO
async function excluirGenero(req, res) {
    const generoExcluido = await Genero.findByIdAndDelete(req.params.id);
    if (generoExcluido) {
        res.json({ mensagem: "genero excluído com sucesso!", generoExcluido });
    } else {
        res.status(404).json({ mensagem: "genero não encontrado!" });
    }
}

// EXPORTANDO FUNÇÕES
module.exports = {
    criarGenero,
    buscarTodosGeneros,
    buscarGeneroPorId,
    atualizarGenero,
    excluirGenero
};
