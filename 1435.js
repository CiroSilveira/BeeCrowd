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
let newChar = 2;
let newLayer = 1;

do {
	let matrixSize = lines.shift();
	matrixSize = parseInt(matrixSize);

	if (matrixSize === 0) break;

	for (let line = 0; line < matrixSize; line++) {//It builds a matrix full of '1'
		let array = [];
		for (let colum = 0; colum < matrixSize; colum++) {
			array[colum] = 1;
		}
		matrix[line] = array;
	}
	
	newLayers(matrixSize);

} while (true);


function newLayers (matrixSize) {

	do {//It builds the internal matrices
		if (matrixSize < 3) break;

		for (let line = newLayer; line < matrixSize - newLayer; line++) {
			for (let colum = newLayer; colum < matrixSize - newLayer; colum++) {
				matrix[line][colum] = newChar;
			}
		}

        if (matrixSize > 2) {
            newChar++;
            newLayer++;
        }
        
	} while ((newLayer - 1) < parseInt(matrixSize / 2));

	for (let line = 0; line < matrixSize; line++)  {
		let matrixToBePrinted = "";

		for (let colum = 0; colum < matrixSize; colum++) {
			matrixToBePrinted += String(matrix[line][colum]).padStart(3, " ") + " ";			
		}	

		console.log(`${String(matrixToBePrinted).trimEnd()}`);	
	}
    console.log();
	newChar = 2;
    newLayer = 1;
    matrix = [[]];
}