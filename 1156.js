const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear();

let S = 1;
let divisor = 2;

for (let count = 3; count <= 39; count += 2) {
    
    S += (count / divisor);
    divisor *= 2;
}

console.log(`${S.toFixed(2)}`);