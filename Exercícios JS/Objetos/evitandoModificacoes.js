// Object.preventExtensions -> Bloqueia somente a inserção de novos atributos no objeto
// diferentemente do freeze os valores das tags podem ser alterados
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'prodmoção'
})
// Object.isExtensible verifica se o objeto foi construído a partir do Object.preventExtensions
console.log('Extensíve: ', Object.isExtensible(produto)) // false

produto.nome = 'Borracha' // É permitido alterar o valor de uma propriedade
produto.descricao = 'Borracha escolar branca' // Porém não é permitido adicionar outras
delete produto.tag // Deletar também é possível
console.log(produto) // { nome: 'Borracha', preco: 1.99 }

// Object.seal
// Boqueia a inserção e exclusão de propriedades, porém permite a alteração
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa)) // true

pessoa.sobrenome = 'Bonde'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // { nome: 'Juliana', idade: 29 }

// Object.freeze = selado + valores constantes / completamente constante