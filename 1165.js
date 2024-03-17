const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let testCases = lines.shift();   
testCases = parseInt(testCases);
let divisor = 1;
let qtdeDivisores = 0;

for (let count = 0; count < testCases; count++) {
    let valores = lines.shift();
    valores = parseInt(valores);

    while (divisor <= valores) {
        if (valores % divisor === 0) {
            qtdeDivisores++;
            divisor++
        } else {
            divisor++;
        }
    }
    if (qtdeDivisores === 2) {
        console.log(`${valores} eh primo`);
        divisor = 1;
        qtdeDivisores = 0;
    } else {
        console.log(`${valores} nao eh primo`);
        divisor = 1;
        qtdeDivisores = 0;
    }
}


