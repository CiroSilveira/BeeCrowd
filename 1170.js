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
let numberOfDays = 0;

for(let count = 0; count < testCases; count++) {
    let kg = lines.shift();
    kg = parseFloat(kg);

   
    if (kg === 1) {
        console.log(`0 dias`);
    } else {
        while(true) {
            kg /= 2;
            numberOfDays++;
            if(kg <= 1) {
                console.log(`${numberOfDays} dias`);
                numberOfDays = 0;
                break;
            }
        }
    }
}