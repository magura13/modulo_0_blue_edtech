// Conversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
// DOLAR
// EURO
// LIBRA ESTERLINA
// DÓLAR CANADENSE
// PESO ARGENTINO
// PESO CHILENO
// Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real.
// Mostrar o resultado no formato U$9999.99

const prompt = require(`prompt-sync`)();

let value = +prompt(`Enter the value you want to convert: `);

function convert(valuation, currency){
    return valuation * currency
}

const coins = { //objetos não são iteraveis
    euro : 0.18,
    libraEsterlina : 0.15,
    dolar : 0.2,
    dolarCanadense : 0.25,
    pesoArgentino : 7.34,
    pesoChileno : 6.70,

}

console.log(`
The amount of ${value}R$ converted into euros ${convert(value, coins.euro).toFixed(2)} 
The amount of ${value}R$ converted into pounds ${convert(value, coins.libraEsterlina).toFixed(2)}
The amount of ${value}R$ converted into dollars ${convert(value, coins.dolar).toFixed(2)}
The amount of ${value}R$ converted into Canadian dollars ${convert(value, coins.dolarCanadense).toFixed(2)}
The amount of ${value}R$ converted into Argentine pesos ${convert(value, coins.pesoArgentino).toFixed(2)}
The amount of ${value}R$ converted into Chilean pesos ${convert(value, coins.pesoChileno).toFixed(2)}
`);
