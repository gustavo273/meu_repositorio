//7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.

const prompt = require('prompt-sync')();
console.log("------------------------------")
console.log("Cálculo Média Ponderada")
console.log("------------------------------")
let Nota1 = parseFloat(prompt("Digite a sua primeira nota: "))
let Nota2 = parseFloat(prompt("Digite a sua segunda nota: "))
let MediaPond = (4 * Nota1 + 6 * Nota2)/(4 + 6)

console.log(`Sua média: ${MediaPond}`)