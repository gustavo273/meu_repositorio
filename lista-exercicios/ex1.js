//1.Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.

const prompt = require('prompt-sync')();
console.log("------------------------------")
console.log("Sistema de notas")
console.log("------------------------------")

let nota1 = parseFloat(prompt("Digite a sua primeira nota: "))
let nota2 = parseFloat(prompt("Digite a sua segunda nota: "))
let nota3 = parseFloat(prompt("Digite a sua terceira nota: "))
let nota4 = parseFloat(prompt("Digite a sua quarta nota: "))

media = (nota1 + nota2 + nota3 + nota4)/4
    
 if(media >= 7){
     console.log("Sua situação: APROVADO")
 } else {
      console.log("Sua situação: REPROVADO")
 }