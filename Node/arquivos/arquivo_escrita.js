const fs = require('fs')

const produto = {
    nome: 'tablet',
    preco: 3000.00,
    desconto: 0.50
}

//! OBS: caso o arquivo já exista ele apagará tudo e sobreescreverá
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})