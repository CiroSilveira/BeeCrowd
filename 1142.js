const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let valor = lines.shift();
let counter = 1;
let trios = "";

valor = parseInt(valor);

for (let count = 0; count < valor; count++) {
    for (let count2 = 1; count2 <= 3; count2++) {
        trios += counter + " ";
        counter++;
    }
    console.log(`${trios}PUM`);
    counter++;
    trios = "";
}