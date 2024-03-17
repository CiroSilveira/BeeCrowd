const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let salario = lines.shift();   

salario = parseFloat(salario);
let tributavel1 = salario - 2000; //2520
let tributavel2 = salario - 3000; //1520
let tributavel3 = salario - 4500; //20

if (salario > 0 && salario <= 2000) {
    console.log(`Isento`);
} else if (salario > 2000 && salario <= 3000) {
    console.log(`R$ ${(tributavel1 * 0.08).toFixed(2)}`);
} else if (salario > 3000 && salario <= 4500) {
    console.log(`R$ ${(((tributavel1 - tributavel2) * 0.08) +  tributavel2 * 0.18).toFixed(2)}`);
} else if (salario > 4500) {
    console.log(`R$ ${(((tributavel1 - tributavel2) * 0.08) + ((tributavel2 - tributavel3) * 0.18) + (tributavel3 * 0.28)).toFixed(2)}`);
}