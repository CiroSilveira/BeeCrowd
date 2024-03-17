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
let array = lines.shift().split(" ");
let minor = Math.min(...array);

console.log(`Menor valor: ${minor}\nPosicao: ${array.indexOf(String(minor))}`);