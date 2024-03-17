const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let qtdeNumeros = lines.shift();
let somadora = "";
let fibonacci = `0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 
46368 75025 121393 196418 317811 514229 832040 1346269 2178309 3524578 5702887 9227465 14930352 
24157817 39088169 63245986 102334155 165580141 267914296 433494437 701408733 1134903170`
let arrayPosition = 0;

qtdeNumeros = parseInt(qtdeNumeros);
fibonacci = fibonacci.split(" ");

for (let count = 0; count < qtdeNumeros; count++) {
    somadora += Number(fibonacci[arrayPosition]) + " ";
    arrayPosition++;
}

console.log(`${somadora.trim()}`);