const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   

let [valor1, valor2, valor3] = lines.shift().split(" "); 

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3);

let maior12 = (valor1 + valor2 + Math.abs(valor1 - valor2)) / 2;
let maior123 = (valor3 + maior12 + Math.abs(valor3 - maior12)) / 2;

console.log(`${maior123} eh o maior`);