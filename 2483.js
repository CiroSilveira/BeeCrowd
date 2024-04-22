const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

let i = lines.shift();
i = parseInt(i);
let repeat = n => {
    let str = "";
    for(let j = 0; j < n; j++) {
        str += 'a'; 
    }
    
    return "Feliz nat"+str+"l!";
}
console.log(`${repeat(i)}`);