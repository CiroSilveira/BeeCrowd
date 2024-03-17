const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let firstNumber = lines;
firstNumber = parseInt(firstNumber);
let count = 0;

for (let index = 0; index < 1000; index++) {
    console.log(`N[${index}] = ${count}`);
    count++;
    
    if (count >= firstNumber) count = 0;
    
}
