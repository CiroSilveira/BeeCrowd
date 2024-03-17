const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

while (0 === 0) {
    let [valor1, valor2] = lines.shift().split(" ");
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    if (valor1 === valor2) {
        break;
    } else if (valor1 > valor2) {
        console.log(`Decrescente`);
    } else if (valor2 > valor1) {
        console.log(`Crescente`);
    }
}