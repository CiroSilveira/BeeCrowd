const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear();

let testCases = lines.shift();
testCases = parseInt(testCases);
let sumOfOdds = 0;
let qtdeImpares = 0;

for (let count = 0; count < testCases; count++) {
    let [x, y] = lines.shift().split(" ");
    x = parseInt(x);
    y = parseInt(y);
    while (qtdeImpares < y) {
        if (x % 2 !== 0) {
            sumOfOdds += x;
            qtdeImpares++;
            x++;
        } else { 
            x++;
        }
    } 
    qtdeImpares = 0;
    console.log(`${sumOfOdds}`);
    sumOfOdds = 0;
}