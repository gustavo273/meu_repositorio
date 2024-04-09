//3.Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.

const prompt = require('prompt-sync')();
console.log("------------------------------")
console.log("Reajuste salarial")
console.log("------------------------------")
    
let salMensal = parseFloat(prompt("Digite o valor do seu salário mensal: "))
let percReajuste = parseFloat(prompt("Digite o percentual do reajuste: "))
let NovoSal = salMensal + (salMensal * (percReajuste/100))
    
console.log(`Novo salário: ${NovoSal}`)