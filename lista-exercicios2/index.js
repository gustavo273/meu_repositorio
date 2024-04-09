// Configurações iniciais para iniciar um projeto
const express = require("express")
const app = express()
const port = 3000

//Configurar o midleware para trasformar todo corpo em JSON
app.use(express.json())


/* 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2. */
app.post('/exercicio1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2

    const resposta = {
        peca: corpo.peca,
        estoqueMedio: estoqueMedio
    }

    res.json(resposta)
}) 


/* 2. Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. Escreva uma api que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento. */

app.get('/exercicio2', (req, res) => {
    const sal = parseFloat(req.query.sal);
    let mensagem;

    if(sal <= 1000){
        let novoSal = sal + sal * 0.3
        
        res.json({mensagem: `Parabéns! você tem direito ao aumento. Seu novo salário é de: R$${novoSal.toFixed(2)}`})
    } else{
        res.json({mensagem: "Desculpe... Você não tem direito ao aumento salarial!"})
    }

})


/* 3. Escrever uma api que lê o nome de um vendedor, o seu salário fixo, o total de vendas por ele efetuadas e o percentual que ganha sobre o total de vendas. Calcular o salário total do vendedor. Escrever o nome do vendedor e seu salário total. */
app.get('/exercicio3', (req, res) => {
    let nome = req.query.nome
    let salarioFixo = parseFloat(req.query.salarioFixo)
    let totalVendas = parseFloat(req.query.totalVendas)
    let percentual = parseFloat(req.query.percentual) / 100

    let novoSal = salarioFixo + (percentual * totalVendas)
    const resposta = {
        nome,
        novoSal
    }

    res.json(resposta)
})


/* 4. Faça uma api que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h. */
app.get('/exercicio4', (req, res) => {
    let nome = req.query.nome 
    let distancia = req.query.distancia
    let tempo = req.query.tempo

    let velMedia = distancia / tempo
    
    res.json({resposta : `A velocidade média do ${nome} foi de ${velMedia} Km/h.`})
})


/* 5. Faça uma api que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:

    • Salários até 2.000, reajuste de 50%
    • Salários maiores que 2.000, reajuste de 30% */
app.get('/exercicio5', (req, res) => {
    const salario = parseFloat(req.query.salario);
    let novoSal
    if(salario <= 2000){
        novoSal = salario + salario * 0.5
    
    } else{
        novoSal = salario + salario * 0.3
    }

    res.json({resposta: `Reajuste do salário: R$${novoSal.toFixed(2)}` })
})

/* 6. Construa uma api que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo. Fórmulas para cálculo do peso:
    • peso ideal de homem = (72,7 x altura) – 58
    • peso ideal da mulher = (62,1 x altura) – 44,7 */
app.get('/exercicio6', (req, res) => {
    let altura = parseFloat(req.query.altura)
    let sexo = req.query.sexo
    let pesoIdeal

    switch(sexo){
        case "masculino":
            pesoIdeal = 72.7 * altura - 58;
            break;
        case "feminino":
            pesoIdeal = 62.1 * altura - 44,7;
            break;
    }

    res.json({resposta: `Peso ideal: ${pesoIdeal.toFixed(2)} Kg.`})
})


/* 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
 */

app.post('/exercicio7', (req, res) => {
    let listaProdutos = []

    req.body.forEach(produto => {
        listaProdutos.push(produto)
    });

    let maiorPrecoLido = 0
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPrecoLido){
            maiorPrecoLido = produto.preco
        }
    })

    let soma = 0
    console.log("soma ", soma)
    listaProdutos.forEach(produto => {
        console.log("produto preco ", produto.preco)
        soma = soma + produto.preco
        console.log("soma ", soma)
    })

    let media = soma / listaProdutos.length

    res.json({
        maiorPrecoLido: maiorPrecoLido,
        media: media.toFixed(2)
    })
})


/* 8. Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. Faça uma api que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.
Código do Cargo -> Percentual:
    • 101 -> 5%
    • 102 -> 7,5%
    • 103 -> 10% */
app.get('/exercicio8', (req, res) => {
    let sal = parseFloat(req.query.sal)
    let codigo = parseInt(req.query.codigo)
    let novoSal

    switch(codigo){
        case 101:
            novoSal = sal + sal * 0.05
            break
        case 102:
            novoSal = sal + sal * 0.075
            break
        case 103:
            novoSal = sal + sal * 0.1
            break
        default:
            novoSal = sal + sal * 0.15
    }

    let diferenca = `Diferença: ${novoSal - sal}`
    let antigoSalario = `Antigo salário: ${sal.toFixed(2)}`
    let novoSalario = `Novo salário: ${novoSal.toFixed(2)}`

    res.json({
        antigoSalario,
        novoSalario,
        diferenca
    })

})


/* 9. Faça uma api que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:

    •  Valor da hora trabalhada é igual a 1/5 do salário mínimo;
    •  Salário do mês é igual ao número de horas trabalhadas vezes o valor da hora trabalhada;
    •  Para cada dependente acréscimo de 32 reais;
    •  Para cada hora extra trabalhada o cálculo do valor da hora trabalhada acrescida de 50 %;
    •  Salário bruto é igual ao salário do mês mais os valores dos dependentes mais os valores das horas extras;
    •  Cálculo do valor do imposto de renda retido na fonte segue a tabela abaixo:
        IRRF | Salário Bruto
        Isento Inferior a 2.000
        10% De 2.000 a 5.000
        20% Superior a 5.000
    • Salário líquido é igual ao salário bruto menos IRRF;
    • A gratificação segue a próxima tabela:
          Salário Líquido | Gratificações
          Até 3.500 | 1.000 reais
          Superior a 3.500 | 500 reais
    • Salário a receber do funcionário é igual ao salário líquido mais a gratificação. */

app.post('/calcular-salario', (req, res) => {
    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body;

    const valorHora = salarioMinimo / 5;

    let salarioMes = horasTrabalhadas * valorHora;

    const acrescimoDependentes = dependentes * 32;
    salarioMes += acrescimoDependentes;

    const valorHoraExtra = valorHora * 1.5;
    const salarioHorasExtras = horasExtras * valorHoraExtra;

    const salarioBruto = salarioMes + salarioHorasExtras;

    let irrf;
    if (salarioBruto <= 2000) {
        irrf = 0;
    } else if (salarioBruto <= 5000) {
        irrf = salarioBruto * 0.1;
    } else {
        irrf = salarioBruto * 0.2;
    }

    const salarioLiquido = salarioBruto - irrf;

    let gratificacao;
    if (salarioLiquido <= 3500) {
        gratificacao = 1000;
    } else {
        gratificacao = 500;
    }

    const salarioReceber = salarioLiquido + gratificacao;

    res.json({ salarioReceber });
});


//start da aplicação com a porta definida
// app.listen(port) -> só assim já funciona
// Usamos a função para que quando a aplicação inicia ele mande uma mensagem
app.listen(port, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
})