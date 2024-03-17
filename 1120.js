const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let result = "";

while (true) {

    let [digit, number] = lines.shift().split(" ");


    if (digit === "0" && number === "0") break;

    for (let index = 0; index < number.length; index++) {

        if (number.charAt(index) != digit) {
            result += number.charAt(index);

        }
    }

    if (Number(result) === 0) result = 0;

    console.log(`${String(trimZeros(result)).trimEnd()}`);
    result = "";

}

function trimZeros (result) {
    let newResult = result;
    for (let index = 0; index < result.length; index++) {
        if(result[index] == 0) {
            newResult = result.slice(index + 1, result.length);
        } else {
            break;
        }
    }
    return newResult;
}