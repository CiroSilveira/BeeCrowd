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

for (let count = 0; count < valor1; count++) {
    let valor = lines.shift();
    valor = parseInt(valor);
    if (valor % 2 === 0 && valor > 0) {
        console.log(`EVEN POSITIVE`);
    } else if (valor % 2 === 0 && valor < 0) {
        console.log(`EVEN NEGATIVE`);
    } else if (valor === 0) {
        console.log(`NULL`);
    } else if (valor % 2 !== 0 && valor > 0) {
        console.log(`ODD POSITIVE`);
    } else if (valor % 2 !== 0 && valor < 0) {
        console.log(`ODD NEGATIVE`);
    } 
}