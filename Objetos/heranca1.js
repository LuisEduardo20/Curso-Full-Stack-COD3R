const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}


// __Object__ para acessar o pai do objeto
console.log(ferrari.prototype)
console.log(ferrari.__proto__)
// Object.prototype é o objeto de mais alto nível
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function meuObjeto() {}
console.log(typeof meuObjeto, typeof Object)
console.log(Object.prototype, meuObjeto.prototype)

