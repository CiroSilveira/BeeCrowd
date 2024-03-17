const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let valor1 = lines.shift();
let valor2 = lines.shift();
let somaTotal = 0;

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);

if (valor1 > valor2) {
    let temp = valor2;
    valor2 = valor1;
    valor1 = temp;
}

for (let count = valor1; count <= valor2; count++) {
    if (count % 13 === 0) {
      
    } else if (valor1 % 13 !== 0) {
        somaTotal += count;
    }
}

console.log(`${somaTotal}`);
