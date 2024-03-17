const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let numberOfLittleBalls = lines.shift();
let numberOfBranchs = lines.shift();
numberOfLittleBalls = parseInt(numberOfLittleBalls);
numberOfBranchs = parseInt(numberOfBranchs);
let ballsToBuy = parseInt(numberOfBranchs / 2) - numberOfLittleBalls; 

if (ballsToBuy > 0) {
    console.log(`Faltam ${ballsToBuy} bolinha(s)`);    
} else {
    console.log(`Amelia tem todas bolinhas!`);    
}
