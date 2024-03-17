const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 
console.clear();
let duracao = lines.shift();   

duracao = parseInt(duracao);

horas = parseInt((duracao / 60) / 60);
minutos = parseInt((duracao / 60) - (horas * 60));
segundos = duracao % 60;

console.log(`${horas}:${minutos}:${segundos}`);