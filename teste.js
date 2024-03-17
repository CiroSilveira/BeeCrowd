const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let prompt = require('prompt-sync')();

let array = [];
for(let i = 0; i < 10; i++) {
    array[array.length] = Number(prompt(`Digite um valor: `));
}

console.log(`${typeof array}`);