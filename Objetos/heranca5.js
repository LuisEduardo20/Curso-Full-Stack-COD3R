console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

console.log(String.prototype.reverse)

// Criando métodos dentro de objetos já existentes
String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}
console.log('Escola 123'.reverse())

String.prototype.retornaPrimeiro = function() {
  return this[0]
}

console.log('teste'.retornaPrimeiro())