const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let newString = "";
let isUpper = false;

while (true) {
    let string = lines.shift();

    if (string === undefined || string === "") break;

    for (let index = 0; index < string.length; index++) {

        if (string.charAt(index) === " ") {
            newString += " ";

        } else if (isUpper) {
            newString += string.charAt(index).toLowerCase();
            isUpper = false;

        } else {
            newString += string.charAt(index).toUpperCase();
            isUpper = true;
            
        }

        
    } 
    console.log(`${newString}`);
    newString = "";
    isUpper = false;
}