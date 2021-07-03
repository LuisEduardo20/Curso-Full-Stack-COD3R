/**
* 09)​ Construa uma função para um sistema de notas de uma instituição que possui a 
* seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. As notaspossuem a seguinte regra de 
* arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor 
* que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 
* 38, não é feito nenhumarredondamento pois esta nota resulta na reprovação do aluno. 
* Por exemplo, a nota 84 será arredondada para85, mas a nota 29 não será arredondada 
* por ser abaixo de 40 e não ser possível arredondamento eficiente, ouseja, que evite 
* a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois 
* atingirá 40e o aluno será aprovado.
*/

function calculaNota(nota) {
  let multiplos = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]

  if(nota < 0 || nota > 100){
    return 'Nota inválida'
  }

  else if(nota < 40) {
    return `Reprovado com nota ${nota}`
  }
  else {
    for(let i in multiplos){
      if(multiplos[i] - nota >= 0 && multiplos[i] -  nota <= 3){
        return  `Aprovado com nota ${nota + (multiplos[i] - nota)}`
      }
      else if(multiplos[i] - nota > 3) {
        return `Aprovado com nota ${nota}`
      }
    }
  }
}

console.log(calculaNota(100))
console.log(calculaNota(30))
console.log(calculaNota(38))
console.log(calculaNota(88))
console.log(calculaNota(61))