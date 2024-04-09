//5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor

const prompt = require('prompt-sync')();
console.log("------------------------------")
console.log("Cálculo Custo Carro")
console.log("------------------------------")

let CustoFabrica = parseFloat(prompt("Digite o custo de Fábrica do carro: "))
let PorcentDistribuidor = (parseFloat(prompt("Digite a porcentagem do Distribuidor: "))/100) * CustoFabrica
let Impostos = (parseFloat(prompt("Digite a porcentagem dos impostos: "))/100) * CustoFabrica
let CustoFinal = CustoFabrica + PorcentDistribuidor + Impostos

console.log(`Custo Final: R$ ${CustoFinal.toFixed(2)}`)