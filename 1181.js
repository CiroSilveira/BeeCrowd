const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let consideredLine = lines.shift();
consideredLine = parseInt(consideredLine);
let operator = lines.shift();
let matrix = [[]];
let sum = 0;

for (let liness = 0; liness < 12; liness++) {
    let array = [];
    for (let colums = 0; colums < 12; colums++) {
        let number = lines.shift();
        number = parseInt(number);
        array[colums] = number;
    }
    matrix[liness] = array;
}

if (operator === "M") {
    for (let line = consideredLine; line === consideredLine; line++) {
        for (let colum = 0; colum < 12; colum++) {
            sum += Number(matrix[line][colum]);
        }
    }
    sum = (sum / 12).toFixed(1);
    console.log(`${sum}`);
    sum = 0;
}

if (operator === "S") {
    for (let line = consideredLine; line === consideredLine; line++) {
        for (let colum = 0; colum < 12; colum++) {
            sum += Number(matrix[line][colum]);
        }
    }
    console.log(`${sum.toFixed(1)}`);
    sum = 0;
}
