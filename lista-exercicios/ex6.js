//6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

const prompt = require('prompt-sync')();
console.log("------------------------------")
console.log("Cálculo Salárial")
console.log("------------------------------")

let CarrosVendidos = parseInt(prompt("Digite a quantidade de carros que foram vendidos: "))
let TotalVendas = parseFloat(prompt("Digite o valor total das vendas: "))
let SalFixo = parseFloat(prompt("Digite o valor do seu salário: "))
let ValorCarrosVendidos = parseFloat(prompt("Digite o valor que você recebe por carros vendidos: ")) * CarrosVendidos
let ComissaoVendasEfetuadas = (5/100) * TotalVendas

let SalFinal = SalFixo + ValorCarrosVendidos + ComissaoVendasEfetuadas

console.log(`Salário Final: R$ ${SalFinal.toFixed(2)}`)