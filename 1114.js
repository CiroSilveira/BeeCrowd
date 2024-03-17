const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let senha;

do {
    senha = lines.shift();

    senha = parseInt(senha);

    if (senha !== 2002) console.log(`Senha Invalida`);
    else if (senha === 2002) console.log(`Acesso Permitido`); 
    
} while (senha !== 2002);