const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (0 === 0) {
    let valor = lines.shift();
    valor = parseInt(valor);

    if (isNaN(valor) || (valor !== 1 && valor !== 2 && valor !== 3 && valor !== 4)) {}
    else if (valor === 1) alcool++;
    else if (valor === 2) gasolina++;
    else if (valor === 3) diesel++;
    else if (valor === 4) {
        console.log(`MUITO OBRIGADO`);
        console.log(`Alcool: ${alcool}`);
        console.log(`Gasolina: ${gasolina}`);
        console.log(`Diesel: ${diesel}`);
        break;
    }
}