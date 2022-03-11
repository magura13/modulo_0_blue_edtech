// Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
// salários até R$ 280,00 (incluindo) : aumento de 20%
// salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
// salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
// salários de R$ 1500,00 em diante : aumento de 5%

const prompt = require(`prompt-sync`)();

const name = prompt(`Type your name: `);

const wage = +prompt(`Enter your monthly salary: `);

if (wage <= 280) {
  result = wage * 1.2;
} else if (wage > 280 && wage <= 700) {
  result = wage * 1.15;
} else if (wage > 700 && wage <= 1500) {
  result = wage * 1.1;
} else {
  result = wage * 1.05;
}

console.log(
  `
    ${name}, your wage is ${wage}R$. 
    The increase was ${result - wage}R$.
    The total you will receive is ${result}R$.
    `
);
