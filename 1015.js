const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   

let [x1p1, x2p1] = lines.shift().split(" "); 
let [x1p2, x2p2] = lines.shift().split(" "); 

x1p1 = parseFloat(x1p1);
x2p1 = parseFloat(x2p1);
x1p2 = parseFloat(x1p2);
x2p2 = parseFloat(x2p2);

let distancia = Math.sqrt(((x1p2 - x1p1)**2) + ((x2p2 - x2p1)**2));

console.log(distancia.toFixed(4));