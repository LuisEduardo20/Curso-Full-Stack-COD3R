// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

function multiDois(num1, num2) {
  let multiplicacao = num1;

  if(num1 < 0 || num2 < 0) {
    return "Números inválidos, por favor digite outros";
  }
  else {
    for(let i = 1 ; i < num2 ; i++) {
      multiplicacao += num1;
    }
  
    return multiplicacao;
  }
}

console.log(multiDois(100, 327))
console.log(multiDois(0, 25))
console.log(multiDois(-1, 327))