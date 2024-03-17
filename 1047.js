const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let notaExame = lines.shift();   
console.clear();

let [horaInicio, minutoInicio, horaFim, minutoFim] = lines.shift().split(" "); 
let duracaoTotalHoras, duracaoTotalMinutos;

horaInicio = parseInt(horaInicio);
minutoInicio = parseInt(minutoInicio);
horaFim = parseInt(horaFim);
minutoFim = parseInt(minutoFim);

duracaoTotalHoras = duracaoEmHoras(horaInicio, horaFim, minutoInicio, minutoFim);
duracaoTotalMinutos = duracaoEmMinutos(minutoInicio, minutoFim);

console.log(`O JOGO DUROU ${duracaoTotalHoras} HORA(S) E ${duracaoTotalMinutos} MINUTO(S)`);

function duracaoEmHoras(horaInicio, horaFim, minutoInicio, minutoFim) {

    if (horaInicio > horaFim) {
        
        if (minutoInicio === minutoFim) {
            horaFim += 24;
            return horaFim - horaInicio;

        } else if (minutoInicio > minutoFim) {
            let temp1 = horaInicio * 60; 
            let temp2 = (horaFim + 24) * 60;

            return parseInt(((temp2 + minutoFim) - (temp1 + minutoInicio)) / 60);

        } else if (minutoInicio < minutoFim) {
            horaFim += 24;
            return horaFim - horaInicio;
        }
        
    } else if (horaInicio === horaFim) {
        
        if (minutoInicio === minutoFim) {
            return 24;

        } else if (minutoInicio > minutoFim) {
            let temp = 24 * 60;
            return parseInt((temp - (minutoInicio + minutoFim)) / 60);

        } else if (minutoInicio < minutoFim) {
            return horaFim - horaInicio;
        }

    } else if (horaInicio < horaFim) {   

        if (minutoInicio === minutoFim) {
            return horaFim - horaInicio;

        } else if (minutoInicio > minutoFim) {
            let temp1 = horaInicio * 60; 
            let temp2 = horaFim * 60; 
            return parseInt(((temp2 + minutoFim) - (temp1 + minutoInicio)) / 60);  

        } else if (minutoInicio < minutoFim) {
            return horaFim - horaInicio;
        } 
    }

}

function duracaoEmMinutos(minutoInicio, minutoFim){

    if (minutoInicio > minutoFim) {
        minutoFim += 60;
        return minutoFim - minutoInicio;

    } else if (minutoInicio === minutoFim) {
        return 0;

    } else if (minutoInicio < minutoFim) {
        return minutoFim - minutoInicio;
    }

}