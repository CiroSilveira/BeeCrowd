const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

while(Number(lines[0]) !== 0) {
    let arr = [n1, n2, n3] = lines.shift().split(' ');
    arr.map((e) => {
        parseInt(e);
    });

    let answer = Math.sqrt(((arr[0] * arr[1]) / (arr[2] / 100)));

    console.log(`${Math.trunc(answer)}`);
}