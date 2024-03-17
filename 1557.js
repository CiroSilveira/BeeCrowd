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
let lastPositionLength;

do {
	let matrixSize = lines.shift();
	matrixSize = parseInt(matrixSize);

	if (matrixSize === 0) break;

	for (let line = 0; line < matrixSize; line++) {
		let array = [];
		for (let colum = 0; colum < matrixSize; colum++) {
			array[colum] = Math.pow(2, line + colum);
		}
		matrix[line] = array;
	}
    lastPositionLength = String(matrix[matrixSize - 1][matrixSize - 1]).length;
	
	for (let line = 0; line < matrixSize; line++) {
		let matrixToBePrinted = "";
		for (let colum = 0; colum < matrixSize; colum++) {
			matrixToBePrinted += String(matrix[line][colum]).padStart(lastPositionLength, " ") + " ";
		}
		console.log(matrixToBePrinted.trimEnd());
	}
	
	console.log();
    matrix = [[]];

} while (true);