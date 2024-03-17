const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   

let [codItem, qtdeItem] = lines.shift().split(" "); 

codItem = parseInt(codItem);
qtdeItem = parseInt(qtdeItem);

if (codItem == 1){
    console.log(`Total: R$ ${(qtdeItem * 4.00).toFixed(2)}`);
} else if (codItem == 2){
    console.log(`Total: R$ ${(qtdeItem * 4.50).toFixed(2)}`);
} else if (codItem == 3){
    console.log(`Total: R$ ${(qtdeItem * 5.00).toFixed(2)}`);
} else if (codItem == 4){
    console.log(`Total: R$ ${(qtdeItem * 2.00).toFixed(2)}`);
} else if (codItem == 5){
    console.log(`Total: R$ ${(qtdeItem * 1.50).toFixed(2)}`);
}
