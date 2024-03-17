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
let qtdeImpares = 0;

for (let count = valor1; qtdeImpares < 6; count++) {
    if (count % 2 !== 0) {
        console.log(`${count}`);
        qtdeImpares++;
    }
}