const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let maria = lines.shift();
let son1 = lines.shift();
let son2 = lines.shift();
maria = parseInt(maria);
son1 = parseInt(son1);
son2 = parseInt(son2);
let sumOfChildren = son1 + son2;
let son3 = maria - sumOfChildren;

son1 > son2 && son1 > son3 
    ? console.log(`${son1}`) 
    : son2 > son1 && son2 > son3 
    ? console.log(`${son2}`) 
    : console.log(`${son3}`);