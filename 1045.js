const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   
console.clear();

let [valor1, valor2, valor3] = lines.shift().split(" "); 
let temp;

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);
valor3 = parseFloat(valor3);

bubbleSort(valor1, valor2, valor3)

function bubbleSort(valor1, valor2, valor3){
    if (valor1 < valor2){
        temp = valor1;
        valor1 = valor2;
        valor2 = temp;
    } 
    if (valor2 < valor3) {
        temp = valor2;
        valor2 = valor3;
        valor3 = temp;
    }
    if (valor1 < valor2){
        temp = valor1;
        valor1 = valor2;
        valor2 = temp;
    }
    if (valor2 < valor3) {
        temp = valor2;
        valor2 = valor3;
        valor3 = temp;
    }
}

if (valor1 >= (valor2 + valor3)) {
    console.log(`NAO FORMA TRIANGULO`);
} else if ((Math.pow(valor1, 2)) === (Math.pow(valor2, 2) + Math.pow(valor3, 2))) {
    console.log(`TRIANGULO RETANGULO`);
    if (valor1 === valor2 && valor1 === valor3) {
        console.log(`TRIANGULO EQUILATERO`);
    } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        console.log(`TRIANGULO ISOSCELES`);
    }
} else if ((Math.pow(valor1, 2)) > (Math.pow(valor2, 2) + Math.pow(valor3, 2))) {
    console.log(`TRIANGULO OBTUSANGULO`);
    if (valor1 === valor2 && valor1 === valor3) {
        console.log(`TRIANGULO EQUILATERO`);
    } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        console.log(`TRIANGULO ISOSCELES`);
    }
} else if ((Math.pow(valor1, 2)) < (Math.pow(valor2, 2) + Math.pow(valor3, 2))) {
    console.log(`TRIANGULO ACUTANGULO`);
    if (valor1 === valor2 && valor1 === valor3) {
        console.log(`TRIANGULO EQUILATERO`);
    } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        console.log(`TRIANGULO ISOSCELES`);
    }
}