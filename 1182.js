const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let consideredColum = lines.shift();
consideredColum = parseInt(consideredColum);
let operator = lines.shift();
let matrix = [[]];
let sum = 0;

for (let liness = 0; liness < 12; liness++) {
    let array = [];
    for (let colums = 0;  colums < 12; colums++) {
        let newNumber = lines.shift();
        newNumber = parseInt(newNumber);
        array[colums] = newNumber;
    }
    matrix[liness] = array;
}

if (operator === "M") {
    for (let colum = consideredColum; colum === consideredColum; colum++) {
        for (let line = 0; line < 12; line++) {
            sum += Number(matrix[line][colum]);
        }
    }
    sum = (sum / 12).toFixed(1);
    console.log(`${sum}`);
    sum = 0;
}

if (operator === "S") {
    for (let colum = consideredColum; colum === consideredColum; colum++) {
        for (let line = 0; line < 12; line++) {
            sum += Number(matrix[line][colum]);
        }
    }
    console.log(`${sum.toFixed(1)}`);
    sum = 0;
}