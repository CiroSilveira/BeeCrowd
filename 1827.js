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
    let startNewMatrix = parseInt(matrixSize / 3);
    let matrixCenter = parseInt(matrixSize / 2);

    if (isNaN(matrixSize)) break;

    for (let line = 0; line < matrixSize; line++) {//It builds a matrix full of zeros
        let array = [];
        for (let colum = 0; colum < matrixSize; colum++) {
            array[colum] = 0;
        }
        matrix[line] = array;
    }
    
    for (let line = 0, colum = 0; line < matrix.length; line++, colum++) {//It fills the primary diagonal with "1"
        matrix[line][colum] = 2;
    }

    for (let line = 0, colum = matrix.length - 1; line < matrixSize; line++, colum--) {//It fills the secundary diagonal with "2"
        matrix[line][colum] = 3;
    }

    for (let line = startNewMatrix; line <= (matrixSize - ((parseInt(matrixSize / 3)) + 1)); line++) {
        for (let colum = startNewMatrix; colum <= (matrixSize - ((parseInt(matrixSize / 3)) + 1)); colum++) {
            matrix[line][colum] = 1;
        }
    }

    matrix[matrixCenter][matrixCenter] = 4;

   
    for (let counter = 0; counter < matrixSize; counter++) {//It prints the matrix line by line using the join method to hide the comma
       console.log(`${matrix[counter].join("")}`);
    }

    console.log();

    matrix = [[]];//If i don't make the matrix empty, an error will happen 
    

} while (true);