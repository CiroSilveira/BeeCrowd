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
let sum = 0;
let aboveAVG = 0;

for(let count = 0; count < testCases; count++) {
    let array = lines.shift().split(" ");

    for(let index = 1; index < array.length; index++) {
        sum += Number(array[index]);
    }

    let avg = sum / Number(array[0]);

    for(let index = 1; index < array.length; index++) {
        if(Number(array[index]) > avg) {
            aboveAVG++;
        }
    }
    let percentAboveAVG = (aboveAVG * 100) / Number(array[0]);
    console.log(`${percentAboveAVG.toFixed(3)}%`);
    sum = 0;
    aboveAVG = 0;
}