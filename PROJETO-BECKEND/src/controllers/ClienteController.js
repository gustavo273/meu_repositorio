// IMPORTANDO OS CLIENTES
const Cliente = require('../models/Cliente')
const bcrypt = require('bcrypt')

// CRIANDO CLIENTE
async function registrar(req, res) {
    // Recebendo dados do cliente
    const { nome, email, telefone, senha, cpf } = req.body;
    // Verificando se o email já está cadastrado
    const clienteComEmail = await Cliente.findOne({ email });
    if (clienteComEmail) {
      return res.status(400).json({ mensagem: "O email já está cadastrado" });
    }
    // Verificando se o telefone já está cadastrado
    const clienteComTelefone = await Cliente.findOne({ telefone });
    if (clienteComTelefone) {
      return res.status(400).json({ mensagem: "O telefone já está cadastrado" });
    }
    const clienteComcpf = await Cliente.findOne({ cpf });
    if (clienteComcpf) {
      return res.status(400).json({ mensagem: "O cpf já está cadastrado" });
    }


    // Criptografando a senha
    const hash = await bcrypt.hash(senha, 10);

    // Criando novo cliente
    const novoCliente = new Cliente({
      nome,
      email,
      telefone,
      senha: hash,
      cpf
    });
  
    await novoCliente.save();
  
    res.status(201).json({ mensagem: "Cliente cadastrado com sucesso!", novoCliente });
  }

// LOGIN DO CLIENTE
async function login(req, res) {
    const { email, senha } = req.body
    // Verificando se o email está correto
    const cliente = await Cliente.findOne({ email })
    if (!cliente) {
        return res.status(401).json({ mensagem: "Cliente não encontrado" })
    }
    // Verificando se a senha está correta
    const senhaValida = await bcrypt.compare(senha, cliente.senha)
    if (!senhaValida) {
        return res.status(401).json({ mensagem: "Senha incorreta" })
    }
    // devolve a mensagem de bem vindo + nome do cliente correspondente aos dados
    res.json({ mensagem: `Seja bem vindo ${cliente.nome}` })
}

//  BUSCAR TODOS OS CLIENTES
async function buscarTodos(req, res) {
    res.json(await Cliente.find())
}

// BUSCAR POR ID
async function buscarPorId(req, res) {
    const cliente = await Cliente.findById(req.params.id)
    if (cliente) {
        res.json(cliente)
    } else {
        res.status(404).json({ mensagem: "Cliente não encontrado" })
    }
}

// ATUALIZAR CLIENTE
async function atualizar(req, res) {
    // Obter ID do cliente
    const idCliente = req.params.id;
    // Obter cliente atual
    const clienteAtual = await Cliente.findById(idCliente);
    // Se cliente não encontrado, retornar erro
    if (!clienteAtual) {
        return res.status(404).json({ mensagem: 'Cliente não encontrado' });
    }
    
    // Verificar se senha é igual à atual
    if (novaSenha && bcrypt.compareSync(novaSenha, senhaAtual)) {
        return res.status(400).json({ mensagem: 'A senha não pode ser igual à atual' });
    }
    // Verificar se email é igual ao atual
    if (novoEmail === emailAtual) {
        return res.status(400).json({ mensagem: 'O email não pode ser igual ao atual' });
    }
    // Criptografar nova senha 
    const senhaCript = novaSenha ? await bcrypt.hash(novaSenha, 10) : senhaAtual;
    // Atualizar cliente
    const clienteAtualizado = await Cliente.findByIdAndUpdate(idCliente, {
        nome: novoNome,
        email: novoEmail,
        telefone: novoTelefone,
        senha: senhaCript,
        endereco: novoendereco
    }, { new: true });

    if (!clienteAtualizado) {
        return res.status(500).json({ mensagem: 'Erro ao atualizar cliente' });
    }

    res.json({ mensagem: 'Cliente atualizado com sucesso!', clienteAtualizado });
}

// EXCLUIR CLIENTE
async function excluir(req, res) {
    const clienteExcluido = await Cliente.findByIdAndDelete(req.params.id)
    if (clienteExcluido) {
        res.json(
            {
                mensagem: "Cliente excluido com sucesso!",
                clienteExcluido
            }
        )
    } else {
        res.status(404).json({ mensagem: "Cliente não encontrado!" })
    }
}

//  EXPORTANDO FUNÇÕES
module.exports = {
    registrar,
    buscarTodos,
    login,
    buscarPorId,
    atualizar,
    excluir
}

