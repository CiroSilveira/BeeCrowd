const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let qtdeNotasValidas = 0;
let totalNotas = 0;
let notas;

do {
    notas = lines.shift();
    notas = parseFloat(notas);

    if (notas < 0 || notas > 10) {
        console.log(`nota invalida`);
    } else {
        qtdeNotasValidas++;
        totalNotas += notas;
    }
} while (qtdeNotasValidas < 2);

console.log(`media = ${(totalNotas / 2).toFixed(2)}`);