const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let n5 = lines.shift();

console.clear();
let [valor1, valor2] = lines.shift().split(" "); 

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

if (valor1 == 0 && valor2 != 0){
    console.log(`Eixo Y`);
} else if (valor1 !=0 && valor2 == 0){
    console.log(`Eixo X`);
} else if (valor1 == 0 && valor2 == 0) {
    console.log(`Origem`);
} else if (valor1 > 0 && valor2 > 0) {
    console.log(`Q1`);
} else if (valor1 < 0 && valor2 > 0) {
    console.log(`Q2`);
} else if (valor1 < 0 && valor2 < 0) {
    console.log(`Q3`);
} else if (valor1 > 0 && valor2 < 0) {
    console.log(`Q4`);
}

/*
q1 = x e y positivos
q2 = x negativo e y positivo
q3 = x e y negativos
q4 = x positivo e Y negativo*/