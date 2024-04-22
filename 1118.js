const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
const prompt = require('prompt-sync')();
console.clear();

let sum = 0;
let i = 0;
let opt = 1;

do {
    let nota = lines.shift();
    nota = Number(nota);
    if(nota >= 0 && nota <= 10) {
        sum += nota;
        i++;
        if(i === 2) {
            console.log(`media = ${(sum / 2).toFixed(2)}`);
            sum = 0;
            i = 0;
            do {
                console.log(`novo calculo (1-sim 2-nao)`);
                opt = lines.shift();
                opt = Number(opt);

                if(opt === 1 || opt === 2) {
                    break;
                }
            } while(true);
        }
    } else {
        console.log(`nota invalida`);
    }
    if(opt === 2) break;
} while(opt === 1);
