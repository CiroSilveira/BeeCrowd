const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear();


let testCases = lines.shift();
testCases = parseInt(testCases);
let count;
let qtdeAnos = 0;
let popTempA, popTempB;

for (count = 0; count < testCases; count++) {

    let [popA, popB, crescA, crescB] = lines.shift().split(" "); 
    popA = parseInt(popA); popB = parseInt(popB);
    crescA = parseFloat(crescA); crescB = parseFloat(crescB);

    popTempA = popA; popTempB = popB;

    while (popTempA <= popTempB) {
        if (count === 0) {
            popTempA += parseInt(popA * (crescA / 100));
            popTempB += parseInt(popB * (crescB / 100));
            qtdeAnos++;
            
        } else if (count !== 0) {
            popTempA += parseInt(popTempA * (crescA / 100));
            popTempB += parseInt(popTempB * (crescB / 100));
            qtdeAnos++;
        }

        if (qtdeAnos > 100) {
            console.log(`Mais de 1 seculo.`);
            qtdeAnos = 0;
            break;
        } 

    }

     if (qtdeAnos <= 100 && qtdeAnos !== 0) {
        console.log(`${qtdeAnos} anos.`);
        qtdeAnos = 0;
    }
}