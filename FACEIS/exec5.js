// E os 10% do garçom?
// Defina uma variável para o valor de uma refeição que custou R$ 42,54;
// Defina uma variável para o valor da taxa de serviço que é de 10%;
// Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

const refeicao = 42.54;
const servico = refeicao * 0.1;
const total = servico + refeicao;

console.log(`O valor total da sua refeição é R$ ${total.toFixed(2)}`);