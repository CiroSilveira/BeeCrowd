const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

console.clear();
let testCases = lines.shift(); 
let numbers = "";
let isLetter;//this is a flag

for (let count = 0; count < testCases; count++) {
    let line = lines.shift();

    for (let index = 0; index < 13; index++) {
        
        if (line.charCodeAt(index) >= 48 && line.charCodeAt(index) <= 57) {
            numbers += line.charAt(index); 
            isLetter = false;

        } else if (numbers !== "") {
            if (isLetter) {}
            else {numbers += " "}
            isLetter = true;
        }
    }   

    numbers = numbers.split(" ");
    console.log(`${Number(numbers[0]) + Number(numbers[1]) + Number(numbers[2])}`);
    numbers = "";
}
