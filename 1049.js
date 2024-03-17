const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

//let [horaInicio, minutoInicio, horaFim, minutoFim] = lines.shift().split(" "); 
console.clear();

let tipoAnimal1 = lines.shift();   
let tipoAnimal2 = lines.shift();   
let tipoAnimal3 = lines.shift();   

if (tipoAnimal1 === "vertebrado") {
    if (tipoAnimal2 === "ave") {
        if (tipoAnimal3 === "carnivoro") {
            console.log(`aguia`);
        } else if (tipoAnimal3 === "onivoro") {
            console.log(`pomba`);
        }
    } else if (tipoAnimal1 === "vertebrado") {
        if (tipoAnimal2 === "mamifero") {
            if (tipoAnimal3 === "onivoro") {
                console.log(`homem`);
            } else if (tipoAnimal3 === "herbivoro") {
                console.log(`vaca`);
            }
        }
    }
} else if (tipoAnimal1 === "invertebrado") {
    if (tipoAnimal2 === "inseto") {
        if (tipoAnimal3 === "hematofago") {
            console.log(`pulga`);
        } else if (tipoAnimal3 === "herbivoro") {
            console.log(`lagarta`);
        }
    } else if (tipoAnimal1 === "invertebrado") {
        if (tipoAnimal2 === "anelideo") {
            if (tipoAnimal3 === "hematofago") {
                console.log(`sanguessuga`);
            } else if (tipoAnimal3 === "onivoro") {
                console.log(`minhoca`);
            }
        }
    }
}
