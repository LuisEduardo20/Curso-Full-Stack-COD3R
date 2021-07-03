//32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function media(intArray) {
  let soma = 0;
  let media = 0;
  for(i in intArray) {
    soma += intArray[i]
  }
  media = soma / intArray.length;

  console.log(`Media = ${media}`)
}

media([1, 5, 2, 7, 9,])