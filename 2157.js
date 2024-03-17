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
testCases= parseInt(testCases);
let increasingDecreasing = "";


for (let counter = 0; counter < testCases; counter++) {
    let [firstNumber, secondNumber] = lines.shift().split(" ");
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    for (let count = firstNumber; count <= secondNumber; count++) {
        increasingDecreasing += count;
    }

    for (let count = increasingDecreasing.length; count >= 0; count--) {
        increasingDecreasing += increasingDecreasing.charAt(count);
    }
    console.log(`${increasingDecreasing}`);
    increasingDecreasing = "";
}
