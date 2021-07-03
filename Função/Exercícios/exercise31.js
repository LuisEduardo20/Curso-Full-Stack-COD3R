/**
 * 31)​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números 
 * negativos há nesse vetore imprime a quantidade no console.
*/

function negativos(vetor) {
  let qtd = 0
  let negativos = []
  for(i in vetor) {
    if(vetor[i] < 0) {
      negativos.push(vetor[i])
      qtd++
    }
  }

  console.log(`Tem ${qtd} numero(s) negativos, que são: ${negativos}`)
}

negativos([1, 5, -5, -10, -8, -25])