const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let testCases = lines.shift();
testCases = parseInt(testCases);

for (let index = 0; index < testCases; index++) {
    let [name, power] = lines.shift().split(" ");
    if (name === "Thor") {
        console.log(`Y`);
    } else {
        console.log(`N`);
    }
}