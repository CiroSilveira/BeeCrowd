const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   
  

let [codPc1, qtdePc1, valorUniPc1] = lines.shift().split(" "); 
let [codPc2, qtdePc2, valorUniPc2] = lines.shift().split(" "); 

codPc1 = parseInt(codPc1);
qtdePc1 = parseInt(qtdePc1);
valorUniPc1 = parseFloat(valorUniPc1);
codPc2 = parseInt(codPc2);
qtdePc2 = parseInt(qtdePc2);
valorUniPc2 = parseFloat(valorUniPc2);

valorTotal = ((qtdePc1 * valorUniPc1) + (qtdePc2 * valorUniPc2));

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);