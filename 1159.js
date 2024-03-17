const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let qtdePares = 0;
let sumOfEven = 0;

while (true) {
    var x = lines.shift();
    x = parseInt(x);

    if (x === 0) break;

    while (qtdePares < 5) {
        
        if (x % 2 === 0) {
            sumOfEven += x;
            qtdePares++;
            x++;

        } else {
            x++;
        }
    }
    if (sumOfEven === 0) {}
    else {console.log(`${sumOfEven}`);}

    sumOfEven = 0;
    qtdePares = 0;

}