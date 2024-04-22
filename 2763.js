const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let CPF = lines.shift();

for(let i = 0, j = 3; i < 16; i += 4, j +=4) {
    console.log(`${CPF.slice(i, j)}`);    
}
console.log(`${CPF.slice(0, 3)}`);
console.log(`${CPF.slice(4, 7)}`);
console.log(`${CPF.slice(8, 11)}`);
console.log(`${CPF.slice(-2)}`);