const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let ddd = lines.shift();   

ddd = parseInt(ddd);

if (ddd !== 61 && ddd !==  71 && ddd !==  11 && ddd !==  21 && 
    ddd !==  32 && ddd !==  19 && ddd !==  27 && ddd !==  31) {
    console.log(`DDD nao cadastrado`);
}

switch (ddd) {
    case 61:
        console.log(`Brasilia`);
        break;
    case 71:
        console.log(`Salvador`);
        break;
    case 11:
        console.log(`Sao Paulo`);
        break;
    case 21:
        console.log(`Rio de Janeiro`);
        break;
    case 32: 
        console.log(`Juiz de Fora`);
        break;
    case 19:
        console.log(`Campinas`);
        break;
    case 27: 
        console.log(`Vitoria`);
        break;
    case 31:
        console.log(`Belo Horizonte`);
        break;
}