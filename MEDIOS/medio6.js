// Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista.
// Caso o número já esteja lá dentro, ele não será adicionado.
//  No final, serão exibidos todos os valores únicos digitados, em ordem crescente.
const prompt = require(`prompt-sync`)();

var lista = [];

lista.push = +prompt(`numero`)

for (const teste of lista){
    if (lista === teste){
        console.log(`Digite outro número: `)
    } else if (lista !== teste){
        teste.push
    }
}
console.log(lista)
// let lista = [9, 6, 5, 4, 3, 7, 2, 8, 1];

// console.log(lista.sort());
