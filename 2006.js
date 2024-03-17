const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let cha = lines.shift();
let answers = lines.shift();
let counter = 0;
cha = parseInt(cha);

for (let index = 0; index < 10; index += 2) {
    if (answers[index] == cha) counter++;
}

console.log(`${counter}`);