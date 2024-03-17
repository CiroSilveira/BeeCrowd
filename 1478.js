const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let matrix = [[]];

do {
    let matrixSize = lines.shift();
    matrixSize = parseInt(matrixSize);

    if (matrixSize === 0) break;

    for (let line = 0; line < matrixSize; line++) {
        let array = [];
        for (let colum = 0; colum < matrixSize; colum++) {
            array[colum] = Math.abs(line - colum) + 1;
        }
        matrix[line] = array;
    }

    for (let line = 0; line < matrixSize; line++) {
        let matrixToBePrinted = "";

        for (let colum = 0; colum < matrixSize; colum++) {
            matrixToBePrinted += String(matrix[line][colum]).padStart(3, " ") + " ";    
        }
        console.log(`${matrixToBePrinted.trimEnd()}`);
    }

    console.log();

} while (true);