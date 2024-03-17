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
let newStr = "";
let newStr1 = "";

for (let count = 0; count < testCases; count++) {

	let text = lines.shift();

	for (let index = 0; index < text.length; index++) {//first step
		
		if ((text.charCodeAt(index) >= 65 && text.charCodeAt(index) <= 90) ||
		(text.charCodeAt(index) >= 97 && text.charCodeAt(index) <= 122)) {
			newStr += String.fromCharCode(text.charCodeAt(index) + 3);

		} else {
			newStr += text.charAt(index);
		}
	}

	for (let count = newStr.length; count >= 0; count--) {//second step
		newStr1 += newStr.charAt(count);		

	}
	newStr = newStr1.slice(0, parseInt(newStr1.length / 2));

	for (let count = parseInt(newStr1.length / 2); count < newStr1.length; count++) {//third step
		newStr += String.fromCharCode(newStr1.charCodeAt(count) - 1);

	}
	console.log(`${newStr}`);
	newStr = "";
	newStr1 = "";
}