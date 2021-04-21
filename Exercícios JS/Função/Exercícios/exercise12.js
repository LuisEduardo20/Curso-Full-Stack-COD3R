// 12)​ Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num) {
  let resultFat = 1
  for(let i = num ; i >= 1 ; i--) {
    resultFat *= i
  }
  return resultFat
}

//function fatorial(num) {
//  if(num == 0){
//    return 1
//  }
//  else{
//    return num *= fatorial(num -1)
//  }
//}

console.log(fatorial(4))
console.log(fatorial(3))
console.log(fatorial(2))
console.log(fatorial(1))
console.log(fatorial(0))