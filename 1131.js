const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let golsInter, golsGremio, novoGrenal;
let qtdeGrenais = 0;
let inter = 0;
let gremio = 0;
let empates = 0;

read(golsInter, golsGremio);

function read(golsInter, golsGremio) {
    [golsInter, golsGremio] = lines.shift().split(" ");
    qtdeGrenais++;
    console.log(`Novo grenal (1-sim 2-nao)`);
    novoGrenal = lines.shift();
    novoGrenal = parseInt(novoGrenal);
    if (novoGrenal === 1) {
        if (golsInter > golsGremio) inter++;
        else if (golsInter < golsGremio) gremio++;
        else if (golsInter === golsGremio) empates++;
    read(golsInter, golsGremio);

    } else if (novoGrenal === 2) {
        if (golsInter > golsGremio) inter++;
        else if (golsInter < golsGremio) gremio++;
        else if (golsInter === golsGremio) empates++;
        console.log(`${qtdeGrenais} grenais`);
        console.log(`Inter:${inter}`);
        console.log(`Gremio:${gremio}`);
        console.log(`Empates:${empates}`);
        if (inter > gremio) console.log(`Inter venceu mais`);
        else if (gremio > inter) console.log(`Gremio venceu mais`);
        else if (inter === gremio) console.log(`Nao houve vencedor`);
        process.exit();
    }
}