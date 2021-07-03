/**
 * Getters são métodos que lêem atributos de um objeto e fazem algo com o mesmo,
 * já os Setters atribuem um valor a esse(s) atributos
 */

const sequencia = {
  _valor: 1,  // Convenção para variável acessada internamente

  // O método get é quem pode acessar a variável
  // pega o atributo valor
  get valor() { return this._valor++ },

  // Seta um valor ao atributo valor do objeto sequencia
  set valor(valor) { 
    if(valor > this._valor) {
      this._valor = valor 
    }
  }
}

console.log(sequencia)

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia)

sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)
