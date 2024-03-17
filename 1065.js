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
let qtdePares = 0;

valor1 = Number(valor1);
valor2 = Number(valor2);
valor3 = Number(valor3);
valor4 = Number(valor4);
valor5 = Number(valor5);

for (let numeroPossibilidades = 0; numeroPossibilidades < 5; numeroPossibilidades += 5) {
    if (valor1 %2 === 0) qtdePares += 1;
    if (valor2 %2 === 0) qtdePares += 1;
    if (valor3 %2 === 0) qtdePares += 1;
    if (valor4 %2 === 0) qtdePares += 1;
    if (valor5 %2 === 0) qtdePares += 1;
}

console.log(`${qtdePares} valores pares`);