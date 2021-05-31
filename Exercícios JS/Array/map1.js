// A função map() mapeia um array e tem como parâmetro uma função de callback
// que faz uma ação para cada elemento do array original e returna um novo array com seus valores transformados
const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
  return e * 2
})

console.log(resultado);

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Cadeias de map()
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);