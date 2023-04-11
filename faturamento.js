const jsonData = require('./dados.json');

const faturamentoDiario = jsonData.map(item => item.valor);

const fatSemZero = faturamentoDiario.filter(item => item != 0);

const menorValor = Math.min(...fatSemZero);

const maiorValor = Math.max(...fatSemZero);

const mediaMensal = fatSemZero.reduce((total, valor) => total + valor) / fatSemZero.length;

const diasAcimaDaMedia = jsonData.filter(item => item.valor > mediaMensal).length;

console.log("Menor valor: ", menorValor)
console.log("Maior valor: ", maiorValor)
console.log("Media mensal: ", mediaMensal)
console.log("Acima da media mensal: ", diasAcimaDaMedia)