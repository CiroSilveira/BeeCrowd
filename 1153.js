const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let valor = lines.shift();
valor = parseInt(valor);
let fatorial = 0;

for (let count = valor - 1; count > 0; count--) {
    if (fatorial === 0) fatorial += valor * count;
    else {fatorial *= count }
}

console.log(`${fatorial}`);