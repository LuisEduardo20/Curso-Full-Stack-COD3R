/**
 * 29)​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte 
 * quantos númerosdeste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, 
 * ou seja, inclui o 10 e o 20) e quantosdeles estão fora do intervalo, escrevendo estas 
 * informações.
 */

function intervalo(nums) {
  let dentroIntervalo = []
  for(let i = 0 ; i < nums.length ; i++) {
    if(nums[i] >= 10 && nums[i] <= 20){
      dentroIntervalo.push(nums[i])
    }
  }
  console.log(dentroIntervalo)
}

intervalo([10, 15, 19, 25, 21, 9, 8])