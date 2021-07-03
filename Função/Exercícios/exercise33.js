/**
 * 33) ​ Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
 * quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
 * Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
 * mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

let intVector = [1, 2, 3, 4]
let stringVector = ['one', 'two', 'three', 'four']
let doubleVector = [1.15, 2.63, 3.85, 4.76]

function concat(vector1, vector2) {
  let concatened = []
  for(let i = 0 ; i < 4 ; i++) {
    concatened.push(vector1[i] + ' ' + vector2[i])
  }

  console.log(concatened)
}

concat(intVector, stringVector)
concat(intVector, doubleVector)