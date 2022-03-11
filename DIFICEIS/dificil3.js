// Exercício 3 - Jogo da adivinhação:
//  Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10
//   e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
//  O programa deverá escrever na tela se o usuário venceu ou perdeu.

const prompt = require(`prompt-sync`)();

const plchoice = +prompt(`Try to guess the number chosen by the computer: `)

function random(think) {
  let randomico = Math.floor(Math.random() * 10);
  console.log(`The number chosen by the computer was ${randomico}`)
  if (randomico == think){
      return "You win."
  } else {
      return "You lose."
  }
}

console.log(random(plchoice));