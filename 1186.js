const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let operator = lines.shift();
let matrix = [[]];
let sum = 0;
let endOfLine = 10;
let numberOfPositions = 0;

for (let llines = 0; llines < 12; llines++){
    let array = [];
    for (let colums = 0; colums < 12; colums++) {
        let newNumber = lines.shift();
        newNumber = parseFloat(newNumber);
        array[colums] = newNumber;
    }
    matrix[llines] = array;
}

if (operator === "M") {
    for (let line = 1; line < 12; line++) {
        for (let colum = 11; colum > endOfLine; colum--) {
            sum += Number(matrix[line][colum]);
            numberOfPositions++;
        }
        endOfLine--;
    }
    sum /= numberOfPositions;
    console.log(`${sum.toFixed(1)}`);
} else {
    for (let line = 1; line < 12; line++) {
        for (let colum = 11; colum > endOfLine; colum--) {
            sum += Number(matrix[line][colum]);
        }
        endOfLine--;
    }
    console.log(`${sum.toFixed(1)}`);
}