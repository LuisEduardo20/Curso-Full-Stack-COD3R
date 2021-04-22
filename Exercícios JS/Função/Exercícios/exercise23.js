/*
 * 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
 * aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
 * aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
 * "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function aprovedOrNot(codigo, nota1, nota2, nota3) {
  let notas = [nota1, nota2, nota3]
  notas = notas.sort(function (a, b) {
    return (a < b) ? 1 : ((a > b) ? -1 : 0)
  })
  let media = 0
  // Calcular média
  media = ((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10
  console.log(media);

  while(codigo >= 0) {
    if(media >= 5) {
      console.log(`A média do aluno de código ${codigo}, é ${media}, APROVADO`)
      codigo--
    }
    else if(media < 5){
      console.log(`A média do aluno de código ${codigo}, é ${media}, REPROVADO`)
      codigo--
    }
  }
}

aprovedOrNot(12, 7, 8, 6)