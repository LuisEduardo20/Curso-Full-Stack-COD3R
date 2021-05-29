// Funções importantes para Objetos

const pessoa = {
  nome: 'Rebeca',
  idade: 10,
  peso: 26
}

// Pega as chaves de um objeto
console.log(Object.keys(pessoa))
// Pega as valores de um objeto
console.log(Object.values(pessoa))
// Pega as os pares chave: valor de um objeto
console.log(Object.entries(pessoa))

// Usando 'chave: valor' de um objeto no método forEach()
Object.entries(pessoa).forEach(e => {
  // Nesse modo a variável 'e' acaba se tornando um array
  // onde a chave é uma posição do array e o valor é a outra posição
  console.log(e[0] + ': ' + e[1])
})

// Usando mesmo método porém com descructuring
Object.entries(pessoa).forEach( ([chave, valor]) => {
  console.log( `${chave}: ${valor}` )
})

// Método para definir uma propriedade a um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
  // Permitir que essa propriedade seja visível
  // como por exemplo no método 'entries'
  enumerable: true,
  // Não permite sobreescrever esse atributo
  // Funciona como o método freeze
  writable: false,
  // Definir valor
  value: '01/01/2011'
})

pessoa.dataNascimento = '01/01/1974'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMA Script 2015)
// Concatena objetos a um destino
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2, /*...*/)

Object.freeze(obj)
obj.c = 10
console.log(obj)