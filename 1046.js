const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   
console.clear();

let [horaInicio, horaFim] = lines.shift().split(" "); 
let duracaoTotal;

horaInicio = parseInt(horaInicio);
horaFim = parseInt(horaFim);

if (horaInicio > horaFim) {
    horaFim += 24;
    duracaoTotal = horaFim - horaInicio;
} else if (horaInicio === horaFim) {
    duracaoTotal = 24;
} else if (horaFim > horaInicio) {
    duracaoTotal = horaFim - horaInicio;
}

console.log(`O JOGO DUROU ${duracaoTotal} HORA(S)`);
