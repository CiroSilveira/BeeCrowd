const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();
let valor4 = lines.shift();
let valor5 = lines.shift();
let valor6 = lines.shift();
let qtdePositivos = 0;
let somaValoresPositivos = 0;
let media;

valor1 = Number(valor1);
valor2 = Number(valor2);
valor3 = Number(valor3);
valor4 = Number(valor4);
valor5 = Number(valor5);
valor6 = Number(valor6);

for (let numeroPossibilidades = 0; numeroPossibilidades < 6; numeroPossibilidades += 6) {
    if (valor1 > 0) {
        qtdePositivos += 1;
        somaValoresPositivos += valor1;
    }
    if (valor2 > 0) {
        qtdePositivos += 1;
        somaValoresPositivos += valor2;
    }
    if (valor3 > 0) {
        qtdePositivos += 1;
        somaValoresPositivos += valor3;
    }
    if (valor4 > 0) {
        qtdePositivos += 1;
        somaValoresPositivos += valor4;
    }
    if (valor5 > 0) {
        qtdePositivos += 1;
        somaValoresPositivos += valor5;
    }
    if (valor6 > 0) {
        qtdePositivos += 1;
        somaValoresPositivos += valor6;
    }
}

media = somaValoresPositivos / qtdePositivos;

console.log(`${qtdePositivos} valores positivos\n${(media).toFixed(1)}`);