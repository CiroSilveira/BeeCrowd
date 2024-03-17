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
let dentro = 0;
let fora = 0;

valor1 = parseInt(valor1);


for (let count = 0; count < valor1; count++) {
    let valor = lines.shift();
    if (valor >= 10 && valor <= 20) {
        dentro++;
    } else {
        fora++;
    }
}

console.log(`${dentro} in\n${fora} out`);