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
let ho = "";

for(let count = 0; count < testCases; count++) {
	ho += "Ho ";	
}

console.log(`${ho.trimEnd()}!`);