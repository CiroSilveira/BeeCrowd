const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

while (lines.length > 0 ) {
    let [first, second] = lines.shift().split(" ").map(Number);
    if(first < 0 || second < 0 || isNaN(first) || isNaN(second)) break;
    
    first === 0 || first === 1 ? first = 1n : first = factorial(first);

    second === 0 || second === 1 ? second = 1n : second = factorial(second);

    console.log(`${first + second}`);
} 

function factorial(n) {
    if(n > 1) {
        return BigInt(n) * factorial(n - 1); //recursion
    } else {
        return 1n; //this is a base case
    }
}