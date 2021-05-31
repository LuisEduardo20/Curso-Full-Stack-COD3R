// Criando meu próprio map
Array.prototype.map2 = function(callback) {
  const newArray = []

  for(let i = 0 ; i < this.length ; i++) {
    newArray.push(callback(this[i], i, this))
  }

  return newArray
  /*for(let i in this) {
    return callback(this[i])
  }*/
}

const carrinho = [
  '{ "nome": "Borracha", "preco" : 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lápis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
let precos = carrinho.map2(function(e) {
  const eObject = JSON.parse(e)
  return eObject.preco
})

console.log(precos);