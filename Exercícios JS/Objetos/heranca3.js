const pai = { nome: 'Pedro', corCabelo: 'preto' }

// Criando objeto com um protóripo
const filho1 = Object.create(pai)
filho1.nome = 'João'
console.log(filho1.corCabelo)

// Criando objeto com um protóripo, passando parâmetros para as propriedades
const filho2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true },
})
filho2.nome = 'Carla'
console.log(filho2.nome)
console.log(`${filho2.nome} tem cabelo ${filho2.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filho2))

// Usando 'for in' pra ler proṕriedades de um objeto
for(let key in filho2) {
  console.log(key)

  // Retorna true se o objeto é o 'dono' da propriedade
  // e false se for herdada
  filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}