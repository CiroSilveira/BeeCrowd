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

for (let indexFirst = 0, indexLast = 19; indexFirst < 10; indexFirst++, indexLast--) {
    let temp = array[indexFirst];
    array[indexFirst] = array[indexLast];
    array[indexLast] = temp;
}

for (let index = 0; index < 20; index++) {
    console.log(`N[${index}] = ${array[index]}`);
}