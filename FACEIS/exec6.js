// Qual o valor do troco?
// Defina uma variável para o valor de uma compra que custou R$100,98;
// Defina uma variável para o valor que o cliente pagou R$150,00;
// Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

const buy = 100.98;
const pay = 150;
const change = pay - buy;

console.log(
  `O valor do seu troco arredondado será de: R$ ${change.toFixed(0)}`

  );
