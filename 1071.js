const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let valor1 = lines.shift();
let valor2 = lines.shift();
let somaImpares = 0;

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);

if (valor1 > valor2) {
    
    for (let count = valor2 + 1; count  < valor1; count++){
        if (count % 2 !== 0) {
            somaImpares += count;              
        }
    }
} else if (valor2 > valor1) {
    
    for (let count = valor1 + 1; count < valor2; count++){
        if (count % 2 !== 0) {
            somaImpares += count;              
        }
    }
}

console.log(`${somaImpares}`);