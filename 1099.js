const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

let casosTeste = lines.shift();  
let somaImpares = 0; 

casosTeste = parseInt(casosTeste);

for (let count = 0; count < casosTeste; count++) {
    let [valor1, valor2] = lines.shift().split(" ");
    valor1 = parseInt(valor1);
    valor2 = parseInt(valor2);

    if (valor1 > valor2) {
        for (let counter = valor2 + 1; counter < valor1; counter++) {
            if (counter % 2 !== 0) {
                somaImpares += counter; 
            }
        }
        console.log(`${somaImpares}`);
        somaImpares = 0;
    } else if (valor2 > valor1) {
        for (let counter = valor1 + 1; counter < valor2; counter++) {
            if (counter % 2 !== 0) {
                somaImpares += counter;
            }
        }
        console.log(`${somaImpares}`);
        somaImpares = 0;
    } else {
        console.log(`0`);
    }
}

