let comparaThis = function (a) {  // Função normal o this aponta para o global, arrow não
  console.log(this === a);
}

// global é o objeto 'global' do node, já no navegador é o window
comparaThis(global); // true

const obj = {}
comparaThis = comparaThis.bind(obj) // linka o Objeto 'obj' com a função comparaThis onde o parâmetro 'a' será sempre obj
comparaThis(obj); // aqui passa a ser true
comparaThis(global); // aqui é qualquer outro seria false
comparaThis(this); // false

let comparaThisArrow = a => console.log(this === a);
comparaThisArrow(global) // Com arrow function o this não aponta para o global
comparaThisArrow(module.exports) //  Na arrow function o 'module.exports' é o objeto global
comparaThisArrow(this) // this == this

comparaThisArrow = comparaThisArrow.bind(obj) //  A arow function não permite o objeto global ser alterado, nem mesmo com o bind
comparaThisArrow(obj) // false
