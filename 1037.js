const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 

console.clear();
let valor1 = lines.shift();

valor1 = parseFloat(valor1);

if (valor1 >= 0 && valor1 <= 25) {
    console.log(`Intervalo [0,25]`);
} else if (valor1 > 25 && valor1 <= 50) {
    console.log(`Intervalo (25,50]`);
} else if (valor1 > 50 && valor1 <= 75) {
    console.log(`Intervalo (50,75]`);
} else if (valor1 > 75 && valor1 <= 100) {
    console.log(`Intervalo (75,100]`);
} else if (valor1 < 0 || valor1 > 100) {
    console.log(`Fora de intervalo`);
}
