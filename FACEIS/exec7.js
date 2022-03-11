// Você está na flor da idade?
// Defina uma variável para o valor do ano do nascimento;
// Defina uma variável para o valor do ano atual;
// Defina uma variável que calcula o valor final da idade da pessoa;
// Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".
const prompt = require(`prompt-sync`)();

let today = new Date();
let year = today.getFullYear(); // Defina uma variável para o valor do ano atual;

let born = +prompt(`Digite o seu ano de nascimento: `); // Defina uma variável para o valor do ano do nascimento;

let age = year - born

console.log(`Você tem ${age} anos de idade.\n Você está na flor da idade!!!`)