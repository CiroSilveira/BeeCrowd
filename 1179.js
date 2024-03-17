const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let even = [];
let odd = [];
let ehPar = false;

for (let index = 0; index < 15; index++) {
    let newNumber = lines.shift();
    newNumber = parseInt(newNumber);

    if (newNumber % 2 === 0) {
        even[even.length] = newNumber;
        
    } else {
        odd[odd.length] = newNumber;
        
    }
    if (even.length === 5) {
        for (let evenCount = 0; evenCount < 5; evenCount++) {
            console.log(`par[${evenCount}] = ${even[evenCount]}`);
        }
        
        even = [];

    } else if (odd.length === 5) {
        for (let oddCount = 0; oddCount < 5; oddCount++) {
            console.log(`impar[${oddCount}] = ${odd[oddCount]}`);
        }
        
        odd = [];
    }
    if (index === 10 && newNumber % 2 === 0) {
        ehPar = true;
    }
}

if (ehPar === false) {
    for (let evenCount = 0; evenCount < even.length; evenCount++) {
        console.log(`par[${evenCount}] = ${even[evenCount]}`);
    }
    for (let oddCount = 0; oddCount < odd.length; oddCount++) {
        console.log(`impar[${oddCount}] = ${odd[oddCount]}`);
    }
} else {
    for (let oddCount = 0; oddCount < odd.length; oddCount++) {
        console.log(`impar[${oddCount}] = ${odd[oddCount]}`);
    }
    for (let evenCount = 0; evenCount < even.length; evenCount++) {
        console.log(`par[${evenCount}] = ${even[evenCount]}`);
    }
}
    




