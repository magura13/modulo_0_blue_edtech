// Faça um programa que pergunte ao usuário um número e valide se o numero é par ou impar:
// Crie uma variável para receber o valor, com conversão para inteiro
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

const prompt = require(`prompt-sync`)();

let question = +prompt(`Enter a number to know if it's even or odd: `)

if (question % 2 == 0){
    console.log(`The number ${question} is even.`);
} else {
    console.log(`The number ${question} is odd.`);
}