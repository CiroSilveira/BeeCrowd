const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let testGrade1 = lines.shift();
let averageTest = lines.shift();
let testGrade2;

testGrade1 = Number(testGrade1);
averageTest = Number(averageTest);
testGrade2 = (averageTest * 2) - testGrade1;

console.log(testGrade2);