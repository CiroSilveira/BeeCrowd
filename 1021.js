const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

console.clear();

let valor1 = lines.shift();  

valor1 = parseFloat(valor1);

let qtdeNotas100 = parseInt(valor1 / 100);
let qtdeNotas50 = parseInt((valor1 % 100) / 50);
let qtdeNotas20 = parseInt((((valor1 % 100) % 50) / 20));
let qtdeNotas10 = parseInt(((((valor1 % 100) % 50) % 20) / 10));
let qtdeNotas5 = parseInt((((((valor1 % 100) % 50) % 20) % 10) / 5));
let qtdeNotas2 = parseInt(((((((valor1 % 100) % 50) % 20) % 10) % 5) / 2));
let valorBaseMoedas = (valor1 - (qtdeNotas100 * 100) - (qtdeNotas50 * 50) - (qtdeNotas20 * 20) - (qtdeNotas10 * 10) - (qtdeNotas5 * 5) - (qtdeNotas2 * 2));
let qtdeMoedas1real = parseInt(((valorBaseMoedas * 100).toFixed(2)) / 100);
let qtdeMoedas50centavos = parseInt((((valorBaseMoedas * 100).toFixed(2)) % 100) / 50);
let qtdeMoedasas25centavos = parseInt(((((valorBaseMoedas * 100).toFixed(2)) % 100) % 50) / 25);
let qtdeMoedasas10centavos = parseInt((((((valorBaseMoedas * 100).toFixed(2)) % 100) % 50) % 25) / 10);
let qtdeMoedas5centavos = parseInt(((((((valorBaseMoedas * 100).toFixed(2)) % 100) % 50) % 25) % 10) / 5);
let qtdeMoedas1centavo = parseInt((((((((valorBaseMoedas * 100).toFixed(2)) % 100) % 50) % 25) % 10) % 5) / 1);

console.log(`NOTAS:\n${qtdeNotas100} nota(s) de R$ 100.00`);
console.log(`${qtdeNotas50} nota(s) de R$ 50.00`);
console.log(`${qtdeNotas20} nota(s) de R$ 20.00`);
console.log(`${qtdeNotas10} nota(s) de R$ 10.00`);
console.log(`${qtdeNotas5} nota(s) de R$ 5.00`);
console.log(`${qtdeNotas2} nota(s) de R$ 2.00`);
console.log(`MOEDAS:\n${qtdeMoedas1real} moeda(s) de R$ 1.00`);
console.log(`${qtdeMoedas50centavos} moeda(s) de R$ 0.50`);
console.log(`${qtdeMoedasas25centavos} moeda(s) de R$ 0.25`);
console.log(`${qtdeMoedasas10centavos} moeda(s) de R$ 0.10`);
console.log(`${qtdeMoedas5centavos} moeda(s) de R$ 0.05`);
console.log(`${qtdeMoedas1centavo} moeda(s) de R$ 0.01`);

/* console.log(`${(valorBaseMoedas).toFixed(2)}`); //VALOR BASE PARA O CÁLCULO DAS MOEDAS
O ERRO NA MOEDA DE 1 CENTAVO ESTAVA ACONTECENDO POR CONTA DA NÃO UTILIZAÇÃO DO MÉTODO to.Fixed NO VALOR 
BASE DAS MOEDAS NOS CÁLCULOS, POIS O COMPUTADOR FAZ O CÁLCULO E DEVOLVE UM NÚMERO FRACIONÁRIO E, COMO
1 CENTAVO TEM O SEU CÁLCULO ENVOLVENDO MAIS PRECISÃO, DAVA DIFERENÇA NO PARSEINT DO CÁLCULO DO 1 CENTAVO*/