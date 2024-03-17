const fileSystem = require('fs');
const { totalmem } = require('os');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

let tempoGasto = lines.shift();
let velocidadeMedia = lines.shift();
let kml = 12;

tempoGasto = parseInt(tempoGasto);
velocidadeMedia = parseInt(velocidadeMedia);

totalLitros = ((velocidadeMedia * tempoGasto) / kml);

console.log(`${totalLitros.toFixed(3)}`);
