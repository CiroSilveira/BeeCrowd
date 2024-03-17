const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

while (lines.length > 0 ) {
    let [first, second] = lines.shift().split(" ");
    first = parseInt(first);
    second = parseInt(second);
    if(first < 0 || second < 0 || isNaN(first) || isNaN(second)) break;
    let ff = first;
    let fs = second;
    
    if(first === 0 || first === 1) {
        ff = 1n;
    } else {
        for(let i = ff; i > 1; i--) {
            ff *= parseInt(i - 1);
        }
        ff = BigInt(ff);
    }

    if(second === 0 || second === 1) {
        fs = 1n;
    } else {
        for(let j = fs; j > 1; j--) {
            fs *= parseInt(j - 1);
        }
        fs = BigInt(fs);
    }

    console.log(`${fs + ff}`);
} 