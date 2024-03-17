const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let casos = lines.shift();
let trios = "";
let somadora = 1;

casos = parseInt(casos);

for (let count = 0; count < casos; count++) {
    for (let counter = 0; counter < 3; counter++) {
        trios = somadora + " " + Math.pow(somadora,2) + " " + Math.pow(somadora, 3);
    }
    console.log(`${trios}`);
    somadora++;
    for (let count2 = 0; count2 < 1; count2++) {
        trios = trios.split(" ")
        console.log(`${Number(trios[0])} ${Number(trios[1]) + 1} ${Number(trios[2]) + 1}`);
    }
}