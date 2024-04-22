const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

while(true) {
    let i = lines.shift();
    i = parseInt(i);
    if(i === "" || i === undefined || isNaN(i)) break;
    i === 0 ? console.log(`vai ter copa!`) : console.log(`vai ter duas!`);
}