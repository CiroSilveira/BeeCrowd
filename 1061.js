const fileSystem = require('fs')
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [] = lines.shift().split(" "); 
console.clear();

let diaInicio = lines.shift().split(" ");   
let [horaInicio, minutoInicio, segundosInicio] = lines.shift().split(" : ").map(Number);   
let diaFim = lines.shift().split(" ");   
let [horaFim, minutoFim, segundosFim] = lines.shift().split(" : ").map(Number);

diaInicio[1] = Number(diaInicio[1]), diaFim[1] = Number(diaFim[1]);

let inicioEmSeg = (diaInicio[1] * 86400) + (horaInicio * 3600) + (minutoInicio * 60) + segundosInicio;
let fimEmSeg = (diaFim[1] * 86400) + (horaFim * 3600) + (minutoFim * 60) + segundosFim;

if (fimEmSeg < inicioEmSeg) {
    fimEmSeg += 86400;
    duracaoEmDias = parseInt((fimEmSeg - inicioEmSeg) / 60 / 60 / 24);
    duracaoEmHoras = parseInt(((((((fimEmSeg - inicioEmSeg) / 60) / 60) / 24) - duracaoEmDias) * 24));
    duracaoEmMinutos = parseInt(((((((((fimEmSeg - inicioEmSeg) / 60) / 60) / 24) - duracaoEmDias) * 24) - duracaoEmHoras) * 60));
    duracaoEmSegundos = parseInt(Math.round(((((((((((fimEmSeg - inicioEmSeg) / 60) / 60) / 24) - duracaoEmDias) * 24) - duracaoEmHoras) * 60)) - duracaoEmMinutos) * 60));

    console.log(`${duracaoEmDias} dia(s)\n${duracaoEmHoras} hora(s)`);
    console.log(`${duracaoEmMinutos} minuto(s)\n${duracaoEmSegundos} segundo(s)`);

} else if (inicioEmSeg < fimEmSeg) {
    duracaoEmDias = parseInt((fimEmSeg - inicioEmSeg) / 60 / 60 / 24);
    duracaoEmHoras = parseInt(((((((fimEmSeg - inicioEmSeg) / 60) / 60) / 24) - duracaoEmDias) * 24));
    duracaoEmMinutos = parseInt(((((((((fimEmSeg - inicioEmSeg) / 60) / 60) / 24) - duracaoEmDias) * 24) - duracaoEmHoras) * 60));
    duracaoEmSegundos = parseInt(Math.round(((((((((((fimEmSeg - inicioEmSeg) / 60) / 60) / 24) - duracaoEmDias) * 24) - duracaoEmHoras) * 60)) - duracaoEmMinutos) * 60));

    console.log(`${duracaoEmDias} dia(s)\n${duracaoEmHoras} hora(s)`);
    console.log(`${duracaoEmMinutos} minuto(s)\n${(duracaoEmSegundos).toFixed()} segundo(s)`);
}