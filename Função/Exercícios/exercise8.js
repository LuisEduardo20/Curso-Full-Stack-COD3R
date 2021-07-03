/**
 * 08)​Pedro joga N jogos de basquete por temporada. Para saber como está 
 * ele está progredindo, ele mantémregistro de todos os as pontuações 
 * feitas por jogo. Após cada jogo ele anota no novo valor e confere se 
 * o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma 
 * lista string = “pontuação1 pontuação2pontuação3 etc..”, escreva uma 
 * função que ao recebê-la irá comparar os valores um a um e irá retornar 
 * umvetor com o número de vezes que ele bateu seu recorde de maior 
 * número de pontos e quando fez seu piorjogo. (Número do pior jogo).
 * 
 * Obs.: O primeiro jogo não conta como novo recorde do melhor.
 * Exemplo:String: “10 20 20 8 25 3 0 30 1”Retorno: [3, 7] 
 * (Significa que ele bateu três vezes seu recorde de melhor 
 * pontuação e a pior pontuaçãoaconteceu no sétimo jogo.)
 */

function comparaResults(valores) {
  // Pegar e separar os valores da string
  let pontosStr = valores.split(',')
  let pontosInt = []
  pontosStr.forEach(pontos => {
    pontosInt.push(parseInt(pontos))
  })

  let qtdRecordesBatidos = 0
  let maiorPonto = pontosInt[0]

  // Salvar o menor ponto
  let menorPonto = pontosInt[0]

  // Comparar qual o menor número da lista e quantas vezes ele bateu o recorde
  for(i in pontosInt){
    if((menorPonto < pontosInt[i]) == false){
      menorPonto = pontosInt[i]
    }
    if(pontosInt[i] > maiorPonto){
      maiorPonto = pontosInt[i]
      qtdRecordesBatidos++
    }
  }

  // Salvar o index do menor número
  let indexMenorPonto = pontosInt.indexOf(menorPonto) + 1

  return [qtdRecordesBatidos, indexMenorPonto]
}

console.log(comparaResults('10, 20, 20, 8, 25, 3, 0, 30, 1'))