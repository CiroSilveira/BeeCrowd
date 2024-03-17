const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const { pathToFileURL } = require('url');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let firstValue = lines.shift();
firstValue = parseFloat(firstValue);

for (let index = 0; index < 100; index++) {
    console.log(`N[${index}] = ${Number(firstValue).toFixed(4)}`);
    firstValue /= 2.0000;
    
}