// IMPORTANDO O MODELO DE FILME
const Filme = require('../models/Filme');

// CRIANDO UM FILME
async function criarFilme(req, res) {
    // Recebendo dados do filme
    const { titulo, descricao, categoria, duracao, preco } = req.body;

    // Verificando se o filme já existe
    const filmeExistente = await Filme.findOne({ titulo });
    if (filmeExistente) {
        return res.status(400).json({ mensagem: "Este filme já está cadastrado" });
    }

    // Criando novo filme
    const novoFilme = new Filme({
        titulo,
        descricao,
        categoria,
        duracao,
        preco
    });

    // Salvando o filme no banco de dados
    await novoFilme.save();

    // Retornando mensagem de sucesso e detalhes do filme criado
    res.status(201).json({ mensagem: "Filme cadastrado com sucesso!", novoFilme });
}

// BUSCAR TODOS OS FILMES
async function buscarTodosFilmes(req, res) {
    const filmes = await Filme.find();
    res.json(filmes);
}

// BUSCAR FILME POR ID
async function buscarFilmePorId(req, res) {
    const filme = await Filme.findById(req.params.id);
    if (filme) {
        res.json(filme);
    } else {
        res.status(404).json({ mensagem: "Filme não encontrado" });
    }
}

// ATUALIZAR FILME
async function atualizarFilme(req, res) {
    // Obtendo ID do filme
    const idFilme = req.params.id;

    // Obtendo o filme atual
    const filmeAtual = await Filme.findById(idFilme);

    // Verificando se o filme foi encontrado
    if (!filmeAtual) {
        return res.status(404).json({ mensagem: 'Filme não encontrado' });
    }

    // Extraindo as novas informações do filme
    const { titulo, descricao, categoria, duracao, preco } = req.body;

    // Atualizando o filme
    const filmeAtualizado = await Filme.findByIdAndUpdate(idFilme, {
        titulo,
        descricao,
        categoria,
        duracao,
        preco
    }, { new: true });

    // Verificando se a atualização deu certo
    if (!filmeAtualizado) {
        return res.status(500).json({ mensagem: 'Erro ao atualizar filme' });
    }

    // Retornando o filme atualizado
    res.json({ mensagem: 'Filme atualizado com sucesso!', filmeAtualizado });
}

// EXCLUIR FILME
async function excluirFilme(req, res) {
    const filmeExcluido = await Filme.findByIdAndDelete(req.params.id);
    if (filmeExcluido) {
        res.json({ mensagem: "Filme excluído com sucesso!", filmeExcluido });
    } else {
        res.status(404).json({ mensagem: "Filme não encontrado!" });
    }
}

// EXPORTANDO FUNÇÕES
module.exports = {
    criarFilme,
    buscarTodosFilmes,
    buscarFilmePorId,
    atualizarFilme,
    excluirFilme
};
