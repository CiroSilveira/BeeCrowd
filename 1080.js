const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [a, b, c] = lines.shift().split(" "); 
console.clear();

let valores = "";

for (let count = 0; count < 100; count++) {
    var valor = lines.shift();
    valores += valor + ","   
}

valores = valores.split(",");
let max = Math.max(...valores)
console.log(`${max}\n${valores.indexOf(String(max)) + 1}`);

/* indexOf() me entrega o índice do número que está no array (o "+ 1" neste exercício é por conta da forma
    que o exercício foi solicitado)*/

/* Código sem a utilização dos métodos Math.max e indexOf

let temp;
let position = 0;
let greatterPosition = 0;


for (let count = 0; count < 100; count++) {
    let value = lines.shift();
    value = parseInt(value);

    if (temp === undefined) {
        temp = value;
        position++;
        greatterPosition = position;

    } else if (temp < value) {
        temp = value;
        greatterPosition = position + 1;
        position++;

    } else {
        position++;
        
    } 
}

console.log(`${temp}\n${greatterPosition}`);

*/
