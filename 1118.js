const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let qtdeNotasValidas = 0;
let totalNotas = 0;
let notas;
let simOUnao;

validarCalcular();

function validarCalcular() {
    do {
        notas = lines.shift();
        notas = parseFloat(notas);

        if (notas < 0 || notas > 10) {
            console.log(`nota invalida`);
        } else {
            qtdeNotasValidas++;
            totalNotas += notas;
        }
    } while (qtdeNotasValidas < 2);

    console.log(`media = ${(totalNotas / 2).toFixed(2)}`);
    pergunta();
    
}


function pergunta() {
    qtdeNotasValidas = 0;
    totalNotas = 0;

    console.log(`novo calculo (1-sim 2-nao)`);
    while (0 === 0) {
        simOUnao = lines.shift();
        simOUnao = parseFloat(simOUnao);
        if (simOUnao === "undefined" || simOUnao === "" || isNaN(simOUnao)) break;
        if (simOUnao === 2) process.exit();
        else if (simOUnao !== 1) console.log(`novo calculo (1-sim 2-nao)`);
        else if (simOUnao === 1) console.log(`${validarCalcular()}`);
    }
}
