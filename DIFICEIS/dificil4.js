const prompt = require(`prompt-sync`)();

let saque = parseInt(prompt("Escolha o valor do saque, entre R$10 e R$600: "))

let notas = [100,50,10,5,1];
let qtd = []

console.log (`\nPara o saque de R$ ${saque},00 serão necessarias:`)

for (let i = 0; i < notas.length; i++)
{
    qtd[i] = Math.floor(saque / notas[i])
    saque = saque - qtd[i]*notas[i]
    if(qtd[i]!=0){console.log(`${qtd[i]} notas de ${notas[i]}`)}
}
console.log()