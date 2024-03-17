const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let valor = lines.shift();
let trios = "";
let acumuladora = 1;

valor = parseInt(valor);

for (let count = 0; count < valor; count++) {
    for (let counter = 1; counter < 2; counter++) {
        trios = acumuladora + " " + Math.pow(acumuladora, 2) + " " + Math.pow(acumuladora, 3)
    }
    console.log(`${trios}`);
    acumuladora++;
}