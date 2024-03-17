const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

let idadeEmDias = lines.shift();   

idadeEmDias = parseInt(idadeEmDias);

ano = parseInt(idadeEmDias / 365);
mes = parseInt((idadeEmDias % 365) /30);
dia = (idadeEmDias - ((ano * 365) + (mes * 30)));

console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dia} dia(s)`);