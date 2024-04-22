const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let n = lines.shift();
n = parseInt(n);

if(n === 0) console.log(`E`)
else if(n < 36) console.log(`D`)
else if(n < 61) console.log(`C`)
else if(n < 86) console.log(`B`)
else if(n < 101) console.log(`A`)