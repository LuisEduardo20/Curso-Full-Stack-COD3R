const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray);

// Define uma nova propriedade/função diretamente em um objeto, ou modifica uma propriedade existente
Object.defineProperty(quaseArray, 'toString', {
  value: function() { return Object.values(this) }, // value de 'toString'
  enumerable: false // não permite essa função ser enumerada
})

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)