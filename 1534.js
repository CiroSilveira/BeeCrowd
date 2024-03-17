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
let columController;
let lineController;

do {
    
    let matrixSize = lines.shift();
    matrixSize = parseInt(matrixSize);
    
    if (isNaN(matrixSize)) break;
    
    columController = matrixSize - 1;
    lineController = matrixSize - 1;

    for (let line = 0; line < matrixSize; line++) {//It builds a matrix full of zeros
        let array = [];
        for (let colum = 0; colum < matrixSize; colum++) {
            array[colum] = 0;
        }
        matrix[line] = array;
    }
    
    for (let line = 0, colum = 0; line < matrix.length; line++, colum++) {//It fills the primary diagonal with "1"
        matrix[line][colum] = 1;
    }

    for (let line = 0, colum = matrix.length - 1; line < matrixSize; line++, colum--) {//It fills the secundary diagonal with "2"
        matrix[line][colum] = 2;
    }

    for (let line = 0; line < parseInt(matrixSize / 2); line++) {//It fills the left part between/inside the two diagonals
        for (let colum = line + 1; colum < columController; colum++) {
          matrix[line][colum] = 3;
        }
        columController--;
    }
    columController = 1;
    for (let line = matrixSize - 1; line > parseInt(matrixSize / 2); line--) {//It fills the right part between/inside the two diagonals
        for (let colum = columController; colum < (matrixSize - columController); colum++) {
          matrix[line][colum] = 3;
        }
        columController++;
    }

    for (let colum = 0; colum < parseInt(matrixSize / 2); colum++) {//It fills the top part between/inside the two diagonals
        for (let line = colum + 1; line < lineController; line++) {
            matrix[line][colum] = 3;
        }
        lineController--;
    }
    lineController = 1;
    for (let colum = matrixSize - 1; colum > parseInt(matrixSize / 2); colum--) {//It fills the bottom part between/inside the two diagonals
        for (let line = lineController; line < (matrixSize - lineController); line++) {
            matrix[line][colum] = 3;
        }
        lineController++;
    }

    for (let counter = 0; counter < matrixSize; counter++) {//It prints the matrix line by line using the join method to hide the comma
       console.log(`${matrix[counter].join("")}`);
    }

    matrix = [[]];//If i don't make the matrix empty, an error will happen 
    

} while (true);