const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [var1, var2, var3, var4] = lines.shift().split(" "); 

let casosTeste = lines.shift();
let qtdeRatos = 0;
let qtdeSapos = 0;
let qtdeCoelhos = 0;
let qtdeCobaiasTotal;
let perCentCoelhos, perCentRatos, perCentSapos;

casosTeste = parseInt(casosTeste);

for (let count = 0; count < casosTeste; count++) {
    let [qtdeCobaias, tipoCobaia] = lines.shift().split(" ");
    qtdeCobaias = parseInt(qtdeCobaias);
    if (tipoCobaia === "C") qtdeCoelhos += qtdeCobaias;
    else if (tipoCobaia === "R") qtdeRatos += qtdeCobaias;
    else if (tipoCobaia === "S") qtdeSapos += qtdeCobaias;
}

qtdeCobaiasTotal = qtdeCoelhos + qtdeRatos + qtdeSapos;
perCentCoelhos = (qtdeCoelhos * 100) / qtdeCobaiasTotal;
perCentRatos = (qtdeRatos * 100) / qtdeCobaiasTotal;
perCentSapos = (qtdeSapos * 100) / qtdeCobaiasTotal;

console.log(`Total: ${qtdeCobaiasTotal} cobaias`);
console.log(`Total de coelhos: ${qtdeCoelhos}\nTotal de ratos: ${qtdeRatos}\nTotal de sapos: ${qtdeSapos}`);
console.log(`Percentual de coelhos: ${(perCentCoelhos).toFixed(2)} %\nPercentual de ratos: ${(perCentRatos).toFixed(2)} %\nPercentual de sapos: ${(perCentSapos).toFixed(2)} %`);
