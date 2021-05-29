// Toda variável aponta para um endereço de memória
// EX.: pessoa -> DB124F13FA -> {...}

const pessoa = { nome: 'João' }

// Propriedades de objetos constantes podem ser alteradas
pessoa.nome = 'Pedro'
console.log(pessoa)

// Porém objetos constantes não podem apontar para outro endereço
// além do definido inicialmente
// pessoa = { nome: 'Ana' }  -->  ERROR

// Congela o objeto para que nenhuma propriedade seja alterada após essa linha
Object.freeze(pessoa)

// Ignorado após o freeze
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa.end)

const pessoaConstante = Object.freeze( { nome: 'Josefa' } )