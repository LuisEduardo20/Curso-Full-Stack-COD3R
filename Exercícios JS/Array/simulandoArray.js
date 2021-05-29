const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray);

// Define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade existente, retornando o objeto no final
Object.defineProperty(quaseArray, 'toString', {
  value: function() { return Object.values(this) },
  enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)