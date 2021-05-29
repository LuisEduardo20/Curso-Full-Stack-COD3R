const a = 1
const b = 2
const c = 3

// Forma pré ES6
const obj1 = { a: a, b: b, c: c }

// Forma pós ES6
const obj2 = { a, b, c }
// OBS.: Se quiser mudar o nome da propriedade do objeto
// è necessário usar a forma acima

console.log(obj1)
console.log(obj2)

// Atribuindo nomes e valores a propriedades do objeto
// a partir de outras variáveis

const nomeAttr = 'nota'
const valorAttr = 5.85

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = { [nomeAttr]: valorAttr }
console.log(obj4)

const obj5 = {
  // Definindo funções dentro de objetos
  funcao1: function () {
    //...
  },

  // ES6
  funcao2() {
    //...
  }
}

console.log(obj5)