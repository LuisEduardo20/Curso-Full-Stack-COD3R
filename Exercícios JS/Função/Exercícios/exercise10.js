/**
 * 10)​Crie uma função que verifica se um número inteiro passado como parêmetro é 
 * divisível por 3 e retorne trueou false.
 */

function divide3(num) {
  if((num % 3) == 0){
    return true
  }
  else{ return false }
}

console.log(divide3(3));
console.log(divide3(9));
console.log(divide3(8));
console.log(divide3(18));
console.log(divide3(15));
console.log(divide3(25));