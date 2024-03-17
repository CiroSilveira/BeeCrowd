const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

let distanciaTotalPercorrida = lines.shift();   
let totalCombustivel = lines.shift();   

distanciaTotalPercorrida = parseInt(distanciaTotalPercorrida);
totalCombustivel = parseFloat(totalCombustivel);

let consumoMedio = distanciaTotalPercorrida / totalCombustivel;

console.log(`${consumoMedio.toFixed(3)} km/l`);




