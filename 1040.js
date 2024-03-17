const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);


console.clear();

let [n1, n2, n3, n4] = lines.shift().split(" "); 
let mediaPonderada;

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);

mediaPonderada = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10;
console.log(`Media: ${mediaPonderada.toFixed(1)}`);

if (mediaPonderada >= 7.0 ) {
    console.log(`Aluno aprovado.`);
} else if (mediaPonderada < 5.0) {
    console.log(`Aluno reprovado.`);
} else if (mediaPonderada >= 5.0 && mediaPonderada <= 6.9) {
    let n5 = lines.shift(); 
    n5 = parseFloat(n5);
    console.log(`Aluno em exame.\nNota do exame: ${(n5).toFixed(1)}`);
    let novaMediaPonderada = (mediaPonderada + n5) / 2;
    if (novaMediaPonderada >= 5.0){
        console.log(`Aluno aprovado.\nMedia final: ${novaMediaPonderada.toFixed(1)}`);
    } else if (novaMediaPonderada < 5.0) {
        console.log(`Aluno reprovado.\nMedia final: ${novaMediaPonderada.toFixed(1)}`);
    }
}