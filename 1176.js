const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let fibonacci = [0,1];
let a, b;
let next;
let testCases = lines.shift();
testCases = parseInt(testCases);


for (let index = 0; index < 59; index++) {
    a = Number(fibonacci[index]), b = Number(fibonacci[index + 1]);
    next = a + b;
    fibonacci.push(next);
}

for (let count = 0; count < testCases; count++) {
    let fibonacciIndex = lines;
    console.log(`Fib(${fibonacciIndex[count]}) = ${fibonacci[Number(fibonacciIndex[count])]}`);
}


