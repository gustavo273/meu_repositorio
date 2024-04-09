//4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

const prompt = require('prompt-sync')();
console.log("------------------------------")
console.log("Cálculo Custo Carro")
console.log("------------------------------")

let CustoFabrica = parseFloat(prompt("Digite o custo de Fábrica do carro: "))
let PorcentDistribuidor = (28/100) * CustoFabrica
let Impostos = (45/100) * CustoFabrica
let CustoFinal = CustoFabrica + PorcentDistribuidor + Impostos

console.log(`Custo Final: R$ ${CustoFinal.toFixed(2)}`)