const fileSystem = require('fs');
const { type } = require('os');
const endereco = require('path');
const { pipeline } = require('stream');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear();

console.log(`       A`);
console.log(`      B B`);
console.log(`     C   C`);
console.log(`    D     D`);
console.log(`   E       E`);
console.log(`    D     D`);
console.log(`     C   C`);
console.log(`      B B`);
console.log(`       A`);