const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   
console.clear();

let [a, b, c, d] = lines.shift().split(" "); 

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);

if ((b > c) && (d > a) &&  ((c + d) >  (a + b)) && (c > 0) && (d > 0) && ((a % 2) == 0)){
    console.log(`Valores aceitos`);
} else {
    console.log(`Valores nao aceitos`);
}