const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let casosTeste = lines.shift();

casosTeste = parseInt(casosTeste);

for (let count = 0; count < casosTeste; count++) {
    let [valor1, valor2] = lines.shift().split(" ");
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    if (valor2 === 0) console.log(`divisao impossivel`);
    else {console.log(`${(valor1 / valor2).toFixed(1)}`);}
}