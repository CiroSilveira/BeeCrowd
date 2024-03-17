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
let newStr = "";

for (let count = 0; count < testCases; count++) {
    let str = lines.shift();
    let half = str.length / 2;
    let strLength = str.length;

    for (let index = half; index > 0; index--) {
       newStr += str[index - 1];
    }

    for (let index = half, count = 1; index < strLength; index++, count++) {
        newStr += str[strLength - count];
        
    }
    console.log(`${newStr}`);
    newStr = "";
}