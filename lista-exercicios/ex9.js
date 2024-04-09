//9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.

const prompt = require('prompt-sync')();
console.log("------------------------------")
console.log("Soma numérica")
console.log("------------------------------")

let n1 = parseFloat(prompt("Digite um número: "))
let n2 = parseFloat(prompt("Digite outro número: "))
let soma = n1 + n2
let multi = soma * n1
    
console.log(`Multiplicação do result. da soma pelo primeiro número: ${multi}`)