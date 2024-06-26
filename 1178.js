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

let array = [firstValue];

for (let i = 0; i < 100; i++) {
    array.push(firstValue /= 2.0000);
}

for(let i = 0; i < 100; i++) {
    console.log(`N[${i}] = ${(array[i]).toFixed(4)}`);
}