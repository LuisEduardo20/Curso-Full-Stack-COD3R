/**
 * 30)​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor 
 * dentro do vetor
 */

function maiorMenor(vetor) {
  let maior = 0
  let menor = vetor[0]

  for(i in vetor) {
    if(vetor[i] > maior){
      maior = vetor[i]
    }
    else if(vetor[i] < menor) {
      menor = vetor[i]
    }
  }

  console.log(maior)
  console.log(menor)
}

maiorMenor([1, 3, 5, 8, 4, 10, 25, 24, 14, 17])