const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let numeroMes = lines.shift();   

numeroMes = parseInt(numeroMes);

switch (numeroMes) {
    case 1:
        console.log(`January`);
        break;
    case 2:
        console.log(`February`);
        break;
    case 3:
        console.log(`March`);
        break;
    case 4:
        console.log(`April`);
        break;        
    case 5:
        console.log(`May`);
        break;
    case 6:
        console.log(`June`);
        break;
    case 7:
        console.log(`July`);
        break;
    case 8:
        console.log(`August`);
        break;
    case 9:
        console.log(`September`);
        break;
    case 10:
        console.log(`October`);
        break;
    case 11:
        console.log(`November`);
        break;
    case 12:
        console.log(`December`);
        break;
    default:
        console.log(`Mês inexistente`);
        break;
}