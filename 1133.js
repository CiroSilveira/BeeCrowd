const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let valor1 = lines.shift();
let valor2 = lines.shift();

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);

if (valor1 > valor2) {
    let temp = valor2;
    valor2 = valor1;
    valor1 = temp;
}

for (let count = valor1 + 1; count < valor2; count++) {
    if (count % 5 === 2 || count % 5 === 3) console.log(`${count}`);
}