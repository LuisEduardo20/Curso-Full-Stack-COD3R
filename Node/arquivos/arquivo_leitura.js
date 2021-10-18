const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`) // por ser assíncrono vai aparecer depois do último console.log
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, conteudo) => {
    console.log('Conteúdo da pasta:', conteudo);
})