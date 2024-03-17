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
valor1 = parseInt(valor1);

for (let count = 0; count < valor1; count++) {
    let [n1, n2, n3] = lines.shift().split(" ");
    n1 = parseFloat(n1);//2
    n2 = parseFloat(n2);//3
    n3 = parseFloat(n3);//5
    let mediaPonderada = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 10;
    console.log(`${mediaPonderada.toFixed(1)}`);
}