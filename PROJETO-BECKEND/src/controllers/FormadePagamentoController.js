// IMPORTANDO CATEGORIAS
const FormadePagamento = require('../models/FormadePagamento');

// CRIANDO Forma de pagamento
async function criar(req, res) {
    // Recebendo dados 
    const { nome, descricao } = req.body;
    // Verificando se o nome  já está cadastrado
    const formadepagamentoNome = await FormadePagamento.findOne({ nome });
    if (formadepagamentoNome) {
        return res.status(400).json({ mensagem: "Essa Forma de pagamento já existe" });
    }
    // Criando nova categoria
    const novaFormadepagamento = new FormadePagamento({
        nome,
        descricao
    });

    await novaFormadepagamento.save();

    res.status(201).json({ mensagem: "Categoria cadastrado com sucesso!", novaFormadepagamento });
}

//  BUSCAR TODAS AS CATEGORIAS
async function buscarTodos(req, res) {
    res.json(await FormadePagamento.find())
}

// BUSCAR POR ID
async function buscarPorId(req, res) {
    const formadepagamento = await FormadePagamento.findById(req.params.id)
    if (formadepagamento) {
        res.json(formadepagamento)
    } else {
        res.status(404).json({ mensagem: "Forma de pagamento não encontrada" })
    }
}

// ATUALIZAR
async function atualizar(req, res) {
    // Obtendo ID da forma de pagamento
    const idFormaPagamento = req.params.id;
  
    // Obtendo a forma de pagamento atual
    const formadePagamentoAtual = await FormadePagamento.findById(idFormaPagamento);
  
    // Verificando se o ID foi encontrado
    if (!formadePagamentoAtual) {
      return res.status(404).json({ mensagem: 'Forma de pagamento não encontrada' });
    }
  
    // Extraindo as novas informações da forma de pagamento
    const novoNome = req.body.nome;
    const novaDescricao = req.body.descricao;
  
    // Atualizando a forma de pagamento
    const formadePagamentoAtualizada = await FormadePagamento.findByIdAndUpdate(idFormaPagamento, {
      nome: novoNome,
      descricao: novaDescricao
    }, { new: true });
  
    // Verificando se a atualização deu certo
    if (!formadePagamentoAtualizada) {
      return res.status(500).json({ mensagem: 'Erro ao atualizar forma de pagamento' });
    }
  
    // Retornando a forma de pagamento atualizada
    res.json({ mensagem: 'Forma de pagamento atualizada com sucesso!', formadePagamentoAtualizada });
  }

// EXCLUIR CATEGORIA
async function excluir(req, res) {
    const formadepagamentoExcluida = await FormadePagamento.findByIdAndDelete(req.params.id)
    if (formadepagamentoExcluida) {
        res.json(
            {
                mensagem: "Forma de pagamento excluida com sucesso!",
                formadepagamentoExcluida
            }
        )
    } else {
        res.status(404).json({ mensagem: "Forma de pagamento não encontrada!" })
    }
}

//  EXPORTANDO FUNÇÕES
module.exports = {
    criar,
    buscarTodos,
    buscarPorId,
    atualizar,
    excluir
}