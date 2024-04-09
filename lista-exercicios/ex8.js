//8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos. OBS: V = PI * Raio^2 * Altura

const prompt = require('prompt-sync')();
console.log("------------------------------")
console.log("Cálculo Volume Caixa D'água")
console.log("------------------------------")

let Raio = parseFloat(prompt("Digite o valor do raio: "))
let Altura = parseFloat(prompt("Digite a altura: "))
let Volume = 3.14 * (Raio**2) * Altura

console.log(`Volume da caixa D'água: ${Volume}`)