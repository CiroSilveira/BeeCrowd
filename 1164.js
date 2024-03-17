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
let somaDivisores = 0;

for (let count = 0; count < testCases; count++) {

    let valores = lines.shift();
    valores = parseInt(valores);

    while (divisor < valores) {

        if (valores % divisor === 0) {
            somaDivisores += divisor;
            divisor++;

        } else {
            divisor++;
        }
    }

    if (somaDivisores === valores) {
        console.log(`${valores} eh perfeito`);
        divisor = 1;
        somaDivisores = 0;
    } else {
        console.log(`${valores} nao eh perfeito`);
        divisor = 1;
        somaDivisores = 0;
    }
}