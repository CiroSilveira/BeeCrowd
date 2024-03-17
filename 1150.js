const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let valor1 = lines.shift();
valor1 = parseInt(valor1);
let somadora = valor1;

while (0 === 0) {
    var valor2 = lines.shift();
    valor2 = parseInt(valor2);
    if (valor2 <= valor1) ;
    else break;
}

for (var count = 1; somadora <= valor2; count++) {
    somadora += valor1 + count;
}
console.log(`${count}`);