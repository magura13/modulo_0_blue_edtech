// Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo
//  e implemente a funcionalidade de não aceitar o número 0.

const prompt = require(`prompt-sync`)();

let value = +prompt(`Enter a number to know if it's negative or positive: `);

if(value > 0){
    console.log(`The number ${value} it is positive`);
} else if (value == 0) {
    value = +prompt(`The number ${value} is denied, enter other number: `)
    if(value > 0){
        console.log(`The number ${value} it is positive`);
    } else if (value == 0) {
        value = +prompt(`The number ${value} is denied, enter other number: `)
    } else {
        console.log(`The number ${value} it is negative`);
    }
} else {
    console.log(`The number ${value} it is negative`);
}
