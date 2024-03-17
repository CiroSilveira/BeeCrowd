const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let array = lines;

for (let index = 0; index < 100; index++) {
    if (Number(array[index]) <= 10) {
        console.log(`A[${index}] = ${Number(array[index]).toFixed(1)}`);
    }
}

