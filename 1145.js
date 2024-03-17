const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [valorInicio, valorFim] = lines.shift().split(" ");
let trios = "";
let somadora = 1;

valorInicio = parseInt(valorInicio);
valorFim = parseInt(valorFim);

for (let count = 1; count <= valorFim / valorInicio; count++) {
    for (let counter = 0; counter < valorInicio; counter++) {
        trios += somadora++ + " "
    }
    console.log(`${trios.trim()}`);
    trios = "";
}   