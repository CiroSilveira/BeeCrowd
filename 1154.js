const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear();

let valores;
let somaIdades = 0;
let qtdeIdades = 0;

do {
    valores = lines.shift();
    valores = parseInt(valores);
    if (valores < 0) break;
    somaIdades += valores;
    qtdeIdades++;
} while (valores >= 0)

console.log(`${(somaIdades / qtdeIdades).toFixed(2)}`);