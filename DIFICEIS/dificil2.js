// Exercício 2 - Faça um programa que vai receber como parâmetro o ano de nascimento de uma pessoa, 
// retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATÓRIO nas eleições
const prompt = require(`prompt-sync`)();

function eleicao(born){
    var today = new Date();
    var year = today.getFullYear();
    let voto = year - born 
    
    if (voto <16){
        return "VOCÊ NÃO TEM A PERMISSÃO PARA VOTAR.NEGADO!"
    } else if (voto >= 65 || voto < 18 && voto > 16){
        return "É OPCIONAL A SUA ESCOLHA EM VOTAR."
    } else if (voto >=18 && voto < 65){
        return "O SEU VOTO É OBRIGATÓRIO."
    }
}

const year = +prompt(`Digite o seu ano de nascimento: `)

console.log(eleicao(year))