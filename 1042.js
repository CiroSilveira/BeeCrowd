const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   
console.clear();
let [valor1, valor2, valor3] = lines.shift().split(" "); 

valor1 = parseInt(valor1);
valor2 = parseInt(valor2);
valor3 = parseInt(valor3);

if(valor1 < valor2 && valor1 < valor3) {
    if(valor2 < valor3){
        console.log(`${valor1}\n${valor2}\n${valor3}`);
    } else {
        console.log(`${valor1}\n${valor3}\n${valor2}`);
    }
} else if(valor2 < valor1 && valor2 < valor3) {
    if(valor1 < valor3){
        console.log(`${valor2}\n${valor1}\n${valor3}`);
    } else {
        console.log(`${valor2}\n${valor3}\n${valor1}`);
    }
} else if(valor3 < valor1 && valor3 < valor2) {
    if(valor1 < valor2){
        console.log(`${valor3}\n${valor1}\n${valor2}`);
    } else {
        console.log(`${valor3}\n${valor2}\n${valor1}`);
    }
}
console.log(`\n${valor1}\n${valor2}\n${valor3}`);