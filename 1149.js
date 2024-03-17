const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);


console.clear();

let valores = lines.shift().split(" ");
let somadora = 0;
let arrayPosition = 1;

for (let count = valores; count[arrayPosition] <= 0; arrayPosition++) {
    if (count[arrayPosition] <= 0) {}
} 


for (let count = 0; count < valores[arrayPosition]; count++){
    somadora += Number(valores[0]) + count;
}

console.log(`${somadora}`);

