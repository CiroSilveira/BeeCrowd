const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

let distancia = lines.shift();   
let X = 60;
let Y = 90;


distancia = parseInt(distancia);

tempoNecessario = Math.abs((distancia / (X - Y)) * 60);

console.log(`${tempoNecessario} minutos`);