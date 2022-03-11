// Exercício 1 - Faça um programa, que receba as dimensões de um terreno retangular (largura e comprimento) e mostre a área do terreno.
const prompt = require(`prompt-sync`)();

function area(larg, comp) {
  return larg * comp;
}

let width = +prompt(`Enter the width of your terrain: `);
let length = +prompt(`Enter the lengh of your terrain: `);

console.log(`
The width of your terrain is ${width}.
The length of your terrain is ${length}.
The area of your land is ${area(width, length)}m².
`);
