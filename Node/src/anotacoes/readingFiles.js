const fs = require('fs')

const caminho = __dirname + "/arquivo.json"

//sincrono (o síncrono para a compilação enquanto ele não for resolvido completamente)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//assincrono
fs.readFile(caminho, 'utf-8', (err, content) => {
    const config = content
    console.log(config)
})

const obj = require('./arquivo.json')
const { log } = require('console')
console.log(obj);

fs.readdir(__dirname, (err, arquivos) => {
    console.log(arquivos);
})