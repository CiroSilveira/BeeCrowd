const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   
//let [a, b, c] = lines.shift().split(" "); 
console.clear();

for (let count = 2; (((count % 2) === 0) && (count <= 100)); count += 2) {
    console.log(`${count}`);
}

/* O laço "FOR" inicializa a contadora, vê se a condição é verdadeira e, se for, ele executa os 
comandos de dentro do bloco, finalizando os comandos ele faz o incremento, executa a condição 
novamente e, se a condição ainda for verdadeira após o incremento, ele executa outra vez os 
comandos de dentro do bloco "FOR"; quando a condição for falsa, ele sai do laço "FOR"*/