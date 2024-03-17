const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let valor1 = lines.shift();
let valor2 = lines.shift();
let valor3 = lines.shift();
let valor4 = lines.shift();
let valor5 = lines.shift();
let valor6 = lines.shift();
let qtdePares = 0;
let qtdeImpares = 0;
let qtdePositivos = 0;
let qtdeNegativos = 0;

valor1 = Number(valor1);
valor2 = Number(valor2);
valor3 = Number(valor3);
valor4 = Number(valor4);
valor5 = Number(valor5);
valor6 = Number(valor6);

for (let numeroPossibilidades = 0; numeroPossibilidades < 6; numeroPossibilidades += 6) {
    if (valor1 === 0 || valor2 === 0 || valor3 === 0 || valor4 === 0 || valor5 === 0 || valor6 === 0) {
        qtdePares += 1;
    }
    
    if (valor1 > 0 && valor1 % 2 === 0) {
        qtdePositivos += 1;
        qtdePares += 1;
    } else if (valor1 > 0 && valor1 % 2 !== 0) {
        qtdePositivos += 1;
        qtdeImpares += 1;
    } else if (valor1 < 0 && valor1 % 2 === 0) {
        qtdeNegativos += 1;
        qtdePares += 1;
    } else if (valor1 < 0 && valor1 % 2 !== 0) {
        qtdeNegativos += 1;
        qtdeImpares += 1;
    }

    if (valor2 > 0 && valor2 % 2 === 0) {
        qtdePositivos += 1;
        qtdePares += 1;
    } else if (valor2 > 0 && valor2 % 2 !== 0) {
        qtdePositivos += 1;
        qtdeImpares += 1;
    } else if (valor2 < 0 && valor2 % 2 === 0) {
        qtdeNegativos += 1;
        qtdePares += 1;
    } else if (valor2 < 0 && valor2 % 2 !== 0) {
        qtdeNegativos += 1;
        qtdeImpares += 1;
    }

    if (valor3 > 0 && valor3 % 2 === 0) {
        qtdePositivos += 1;
        qtdePares += 1;
    } else if (valor3 > 0 && valor3 % 2 !== 0) {
        qtdePositivos += 1;
        qtdeImpares += 1;
    } else if (valor3 < 0 && valor3 % 2 === 0) {
        qtdeNegativos += 1;
        qtdePares += 1;
    } else if (valor3 < 0 && valor3 % 2 !== 0) {
        qtdeNegativos += 1;
        qtdeImpares += 1;
    }

    if (valor4 > 0 && valor4 % 2 === 0) {
        qtdePositivos += 1;
        qtdePares += 1;
    } else if (valor4 > 0 && valor4 % 2 !== 0) {
        qtdePositivos += 1;
        qtdeImpares += 1;
    } else if (valor4 < 0 && valor4 % 2 === 0) {
        qtdeNegativos += 1;
        qtdePares += 1;
    } else if (valor4 < 0 && valor4 % 2 !== 0) {
        qtdeNegativos += 1;
        qtdeImpares += 1;
    }

    if (valor5 > 0 && valor5 % 2 === 0) {
        qtdePositivos += 1;
        qtdePares += 1;
    } else if (valor5 > 0 && valor5 % 2 !== 0) {
        qtdePositivos += 1;
        qtdeImpares += 1;
    } else if (valor5 < 0 && valor5 % 2 === 0) {
        qtdeNegativos += 1;
        qtdePares += 1;
    } else if (valor5 < 0 && valor5 % 2 !== 0) {
        qtdeNegativos += 1;
        qtdeImpares += 1;
    }

    if (valor6 > 0 && valor6 % 2 === 0) {
        qtdePositivos += 1;
        qtdePares += 1;
    } else if (valor6 > 0 && valor6 % 2 !== 0) {
        qtdePositivos += 1;
        qtdeImpares += 1;
    } else if (valor6 < 0 && valor6 % 2 === 0) {
        qtdeNegativos += 1;
        qtdePares += 1;
    } else if (valor6 < 0 && valor6 % 2 !== 0) {
        qtdeNegativos += 1;
        qtdeImpares += 1;
    }
}

console.log(`${qtdePares} valor(es) par(es)\n${qtdeImpares} valor(es) impar(es)\n${qtdePositivos} valor(es) positivo(s)\n${qtdeNegativos} valor(es) negativo(s)`);