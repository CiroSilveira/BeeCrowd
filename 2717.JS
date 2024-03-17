const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let lastMinutes = lines.shift();
let [first, second] = lines.shift().split(" ");
lastMinutes = Number(lastMinutes);
first = Number(first);
second = Number(second);

(first + second) <= lastMinutes ? console.log("Farei hoje!") : console.log("Deixa para amanha!");