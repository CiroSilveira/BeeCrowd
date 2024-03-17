const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   
console.clear();

let [a, b, c] = lines.shift().split(" "); 

a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

let delta = Math.pow(b, 2) - (4 * a * c);

if (a == 0 || delta < 0) {
    console.log(`Impossivel calcular`);
} else {
    let r1 = (-b + Math.sqrt(delta)) / (2 * a);
    let r2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`R1 = ${(r1).toFixed(5)}\nR2 = ${(r2).toFixed(5)}`);
}

