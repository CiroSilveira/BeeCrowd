const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();

let valores = "";

for (let count = 0; count < 3; count++) {
    let [valor1, valor2] = lines.shift().split(" ");
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);
    
    if (valor1 === 0 || valor2 === 0) {
    
    } else if (valor1 > valor2) {
        var sumOfValues = 0;
        for (let counter = valor2; counter <= valor1; counter++) {
            valores += counter + " ";
            sumOfValues += counter;
        }
        console.log(`${valores}Sum=${sumOfValues}`);
        sumOfValues = 0;
        valores = "";

    } else if (valor2 > valor1) {
        var sumOfValues = 0;
        for (let counter = valor1; counter <= valor2; counter++) {
            valores += counter + " "
            sumOfValues += counter;
        }
        console.log(`${valores}Sum=${sumOfValues}`);
        sumOfValues = 0;
        valores = "";

    } else if (valor1 === valor2) {
        console.log(`${valor1} Sum=${valor1}`);
    }
}
