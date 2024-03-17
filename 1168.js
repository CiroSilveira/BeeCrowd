const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let testCases = lines.shift();   
testCases = parseInt(testCases);
let numberOfLeds = 0;

for (let count = 0; count < testCases; count ++) {
    let number = lines.shift();

    for (let index = 0; index < number.length; index++) {
        switch (number.charAt(index)) {
            case "0":
                numberOfLeds += 6;
                break;
            case "1":
                numberOfLeds += 2;
                break;
            case "2":
                numberOfLeds += 5;
                break;
            case "3":
                numberOfLeds += 5;
                break;
            case "4":
                numberOfLeds += 4;
                break;      
            case "5":
                numberOfLeds += 5;
                break;
            case "6":
                numberOfLeds += 6;
                break;
            case "7":
                numberOfLeds += 3;
                break;
            case "8":
                numberOfLeds += 7;
                break;
            case "9":
                numberOfLeds += 6;
                break;
        }    
    }
    console.log(`${numberOfLeds} leds`);
    numberOfLeds = 0;
}
