// Faça um programa de cadastro de clientes que mostre um menu de opções
// e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

// const prompt = require(`prompt-sync`)();

// const menu = [`X-Tudo`, `X-Bacon`, `X-Egg`];

// const escolha = +prompt(
//   `Digite o número referente ao seu pedido: [0]X-Tudo  [1]X-Bacon  [2]X-Egg: `
// );

// console.log(`O seu pedido é um ${menu[escolha]}.`);

// const prompt = require('prompt-sync')();

// const cardapioEntrada = ["1 - Batata frita","2 - Aimpim frito", "3 - Salgadinhos","4 - Nenhum"]  
// const cardapioPrincipal = ["1 - Macarrão a Bolonhesa", "2 - Estrogonofe Vegetariano", "3 - Arroz a Grega", "4 - Nenhum"]
// const cardapioBebidas = ["1 - Refrigerante","2 - Vinho","3 - Suco Natural","4 - Nenhum" ]
// let nome
// let pedido1 = "0"
// let pedido2 = "0"
// let pedido3 = "0"
// let reiniciar
// console.log("Bem vindo ao Restaurante Br 101\n")
// nome = prompt("Qual é o seu nome ? ")
// do{
//     console.log(`\nOlá ${nome} Digite apenas numerais de 1 a 4 para fazer seu pedido nos cardapios a seguir:\nQual sua escolha para Entrada ?
//     ${cardapioEntrada} `) 
//      pedido1 = +prompt("Digite o numero da sua escolha: ")
    // console.log("Qual sua escolha para Prato Principal ? ")
    // console.log(cardapioPrincipal)
    // pedido2 = prompt("Digite o numero da sua escolha: ")
    // console.log("Qual sua escolha para Bebida ? ")
    // console.log(cardapioBebidas)
    // pedido3 = prompt("Digite o numero da sua escolha: ")
    // console.log(`\nMuito bem ${nome} suas escolhas foram:\n`)
    // if(pedido1 == 1){
    //     console.log(cardapioEntrada[0])
    // } else if(pedido1 == 2){
    //     console.log(cardapioEntrada[1])
    // }else if(pedido1 == 3){
    //     console.log(cardapioEntrada[2])
    // }else if(pedido1 == 4){
    //     console.log(cardapioEntrada[3])
    // }else{
    //     console.log("Opção Invalida")
    // }
    
    // if(pedido2 == 1){
    //     console.log(cardapioPrincipal[0])
    // } else if(pedido2 == 2){
    //     console.log(cardapioPrincipal[1])
    // }else if(pedido2 == 3){
    //     console.log(cardapioPrincipal[2])
    // }else if(pedido2 == 4){
    //     console.log(cardapioPrincipal[3])
    // }else{
    //     console.log("Opção Invalida")
    // }
    
    // if(pedido3 == 1){
    //     console.log(cardapioBebidas[0])
    // } else if(pedido3 == 2){
    //     console.log(cardapioBebidas[1])
    // }else if(pedido3 == 3){
    //     console.log(cardapioBebidas[2])
    // }else if(pedido3 == 4){
    //     console.log(cardapioBebidas[3])
    // }else{
    //     console.log("Opção Invalida")

//     reiniciar = prompt("Digite R ou r pra recomeçar ou qualquer tecla pra registrar pedido ")
// }while(reiniciar == "r" || reiniciar == "R")

// console.log(`
// Seu pedido de entrada foi : ${cardapioEntrada[pedido1 - 1]}
// \nPedido Registrado com Sucesso`);

const prompt = require('prompt-sync')();

const qtdJogadores = +prompt('Quantidade de jogadores: ');
const qtdRodadas = +prompt('Quantidade de rodadas: ');
let jogadores = [];
let rodada = [];
let maiores = [];
for (let i = 1; i <= qtdJogadores; i++){
    const jogador = { nome: '', valores: [], pontos: 0 };
    const jog = prompt(`Digite o nome do ${i}° jogador: `);
    jogador.nome = jog;
    jogadores.push(jogador);
}
for (let j = 0; j < qtdRodadas; j++) {
    let maior = 0;
    console.log('################');
    console.log(`${j + 1}° rodada`);
    console.log('################');
    for (let i = 0; i < qtdJogadores; i++) {
        let dadoJogado = Math.floor(Math.random() * 7);
        console.log(`${jogadores[i].nome} tirou ${dadoJogado}`);
        jogadores[i].valores.push(dadoJogado);
        rodada.push(dadoJogado);
        if (dadoJogado > maior) {
            maior = dadoJogado;
        }
        if (i == qtdJogadores - 1) {
            maiores.push(maior);
        }
    }
}
console.log('\n');
for (let j = 0; j < qtdRodadas; j++) {
    for (let i = 0; i < qtdJogadores; i++) {
        if (maiores[j] == jogadores[i].valores[j]) {
            jogadores[i].pontos += 1;
        }
    }
}
let maiorPontuacao = 0;
let vencedor = [];
for (let i = 0; i < qtdJogadores; i++) { 
    if (maiorPontuacao < jogadores[i].pontos) {
        maiorPontuacao = jogadores[i].pontos;
    }
}
console.log('################')
for (let i = 0; i < qtdJogadores; i++) { 
    console.log(`${jogadores[i].nome} fez ${jogadores[i].pontos} pontos.`);
    if (maiorPontuacao == jogadores[i].pontos) {
        vencedor.push(jogadores[i].nome);
    }
}
console.log('################');
console.log(`\nO grande vencedor foi ${vencedor}!`);