const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let valor1 = lines.shift();

console.clear();
let [var1, var2, var3] = lines.shift().split(" "); 

var1 = parseFloat(var1);
var2 = parseFloat(var2);
var3 = parseFloat(var3);

if ((var1 > (Math.abs(var2 - var3)) && (var1 < (var2 + var3))) 
    || (var2 > (Math.abs(var1 - var3)) && (var2 < (var1 + var3)))
    || (var3 > (Math.abs(var2 - var1)) && (var3 < (var1 + var2)))) {
        console.log(`Perimetro = ${(var1 + var2 + var3).toFixed(1)}`);
    } else {
        console.log(`Area = ${(((var1 + var2) * var3) / 2).toFixed(1)}`);
    }