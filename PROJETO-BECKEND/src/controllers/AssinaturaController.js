// IMPORTANDO O MODELO DE ASSINATURA
const Assinatura = require('../models/Assinatura');

// CRIANDO UMA ASSINATURA
async function criarAssinatura(req, res) {
    // Recebendo dados da assinatura
    const { nomedoFilme, DataAquisicao, DataDevolucao } = req.body;

    try {
        // Verificando se o cliente existe
        const nomedoFilme = await nomedoFilme.findById(nomedoFilmeId);
        if (!nomedoFilme) {
            return res.status(404).json({ mensagem: 'Filme não encontrado' });
        }

        // Criando nova assinatura
        const novaAssinatura = new Assinatura({
            nomedoFilmeId,
            dataInicio,
            dataFim
        });

        // Salvando a assinatura no banco de dados
        await novaAssinatura.save();

        // Retornando mensagem de sucesso e detalhes da assinatura criada
        res.status(201).json({ mensagem: "Assinatura criada com sucesso!", novaAssinatura });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao criar assinatura", error: error.message });
    }
}

// BUSCAR TODAS AS ASSINATURAS
async function buscarTodasAssinaturas(req, res) {
    try {
        const assinaturas = await Assinatura.find();
        res.json(assinaturas);
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar assinaturas", error: error.message });
    }
}

// BUSCAR ASSINATURA POR ID
async function buscarAssinaturaPorId(req, res) {
    try {
        const assinatura = await Assinatura.findById(req.params.id);
        if (assinatura) {
            res.json(assinatura);
        } else {
            res.status(404).json({ mensagem: "Assinatura não encontrada" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao buscar assinatura", error: error.message });
    }
}

// ATUALIZAR ASSINATURA
async function atualizarAssinatura(req, res) {
    const { plano, dataInicio, dataFim } = req.body;

    try {
        // Verificando se a assinatura existe
        const assinatura = await Assinatura.findById(req.params.id);
        if (!assinatura) {
            return res.status(404).json({ mensagem: 'Assinatura não encontrada' });
        }

        // Atualizando os dados da assinatura
        assinatura.plano = plano;
        assinatura.dataInicio = dataInicio;
        assinatura.dataFim = dataFim;

        // Salvando a assinatura atualizada
        await assinatura.save();

        res.json({ mensagem: 'Assinatura atualizada com sucesso!', assinatura });
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao atualizar assinatura", error: error.message });
    }
}

// EXCLUIR ASSINATURA
async function excluirAssinatura(req, res) {
    try {
        const assinaturaExcluida = await Assinatura.findByIdAndDelete(req.params.id);
        if (assinaturaExcluida) {
            res.json({ mensagem: "Assinatura excluída com sucesso!", assinaturaExcluida });
        } else {
            res.status(404).json({ mensagem: "Assinatura não encontrada!" });
        }
    } catch (error) {
        res.status(500).json({ mensagem: "Erro ao excluir assinatura", error: error.message });
    }
}

// EXPORTANDO FUNÇÕES
module.exports = {
    criarAssinatura,
    buscarTodasAssinaturas,
    buscarAssinaturaPorId,
    atualizarAssinatura,
    excluirAssinatura
};
