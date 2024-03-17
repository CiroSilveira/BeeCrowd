const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [horaInicio, minutoInicio, horaFim, minutoFim] = lines.shift().split(" "); 
console.clear();

let salario = lines.shift();

if (salario >= 0 && salario <= 400) {
    console.log(`Novo salario: ${(salario * 1.15).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(salario * 0.15).toFixed(2)}`);
    console.log(`Em percentual: 15 %`);
} else if (salario > 400 && salario <= 800) {
    console.log(`Novo salario: ${(salario * 1.12).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(salario * 0.12).toFixed(2)}`);
    console.log(`Em percentual: 12 %`);
} else if (salario > 800 && salario <= 1200) {
    console.log(`Novo salario: ${(salario * 1.1).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(salario * 0.1).toFixed(2)}`);
    console.log(`Em percentual: 10 %`);
} else if (salario > 1200 && salario <= 2000) {
    console.log(`Novo salario: ${(salario * 1.07).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(salario * 0.07).toFixed(2)}`);
    console.log(`Em percentual: 7 %`);
} else if (salario > 2000) {
    console.log(`Novo salario: ${(salario * 1.04).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(salario * 0.04).toFixed(2)}`);
    console.log(`Em percentual: 4 %`);
}

