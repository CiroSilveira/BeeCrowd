const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

let valor1 = lines.shift();

valor1 = parseInt(valor1);

let qtdeNotas100 = parseInt(valor1 / 100);
let qtdeNotas50 = parseInt((valor1 % 100) / 50);
let qtdeNotas20 = parseInt(((valor1 % 100) - (qtdeNotas50 * 50)) / 20);
let qtdeNotas10 = parseInt(((valor1 % 100) - (qtdeNotas50 * 50) - (qtdeNotas20 * 20)) / 10);
let qtdeNotas5 = parseInt(((valor1 % 100) - (qtdeNotas50 * 50) - (qtdeNotas20 * 20) - (qtdeNotas10 * 10)) / 5);
let qtdeNotas2 = parseInt(((valor1 % 100) - (qtdeNotas50 * 50) - (qtdeNotas20 * 20) - (qtdeNotas10 * 10) - (qtdeNotas5 * 5)) / 2); 
let qtdeNotas1 = parseInt(((valor1 % 100) - (qtdeNotas50 * 50) - (qtdeNotas20 * 20) - (qtdeNotas10 * 10) - (qtdeNotas5 * 5)) - (qtdeNotas2 * 2) / 1);  

console.log(`${valor1}\n${qtdeNotas100} nota(s) de R$ 100,00`);
console.log(`${qtdeNotas50} nota(s) de R$ 50,00`);
console.log(`${qtdeNotas20} nota(s) de R$ 20,00`);
console.log(`${qtdeNotas10} nota(s) de R$ 10,00`);
console.log(`${qtdeNotas5} nota(s) de R$ 5,00`);
console.log(`${qtdeNotas2} nota(s) de R$ 2,00`);
console.log(`${qtdeNotas1} nota(s) de R$ 1,00`);