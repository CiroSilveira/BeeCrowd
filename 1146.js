const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear();

let sequencias = "";

while (0 === 0) {
    let valor = lines.shift();
    valor = parseInt(valor);
    if (valor === 0) break;
    else {
        for (let counter = 1; counter <= valor; counter++) {
            sequencias += counter + " "
        }
        console.log(`${sequencias.trim()}`);
        sequencias = "";
    }
}