function Aula(nome, videoID) {
  this.nome = nome
  this.videoID = videoID
}

// cria um novo objeto com prototype a função que o gerou
// no caso 'Aula'
const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1)
console.log(aula2)

// simulando operador 'new'
function novo(f, ...params) {  // operador '...' concatena todos os parâmetros em um array
  const obj = {}

  // Define o protótipo do objeto a função passada como parâmetro
  obj.__proto__ = f.prototype

  // função apply onde invoca a função 'f'
  // tem como parâmetros o 'obj' que repesenta o 'this' da função
  // e o params que será o valor de cada 'this'
  f.apply(obj, params)

  return obj
}

const aula3 = novo(Aula, 'Funcionou', 789)
console.log(aula3)

