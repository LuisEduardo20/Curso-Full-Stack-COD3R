// forEach possui uma função de callback que executa sua função pra cada elemento de um array
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// 1º parâmetro é o elemento da posição, o 2º é o indice do elemento
// o 3º parâmetro seria o array em si e um 4º em diante seria undefined
aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`)
})

console.log('\n')

// com arrow function
aprovados.forEach((nome, indice) => console.log(`${indice})`, nome))

console.log('\n')

// Armazenando a exibição numa variável
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)