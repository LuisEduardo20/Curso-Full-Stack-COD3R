console.log(soma(2, 4));
// function declaration
/* Tem a vantagem de poder ser chamada
antes da sua declaração*/
function soma(a, b) {
  return a + b
}

//console.log(sub(2, 4)); ERROR!!
// function expression
/* Não pode ser chamada antes de sua declaração*/
const sub = function (x, y) {
  return x - y
}
console.log(sub(2, 4));

//console.log(mult(2, 4));  ERROR!!
// named function expression
/* Não pode ser chamada antes de sua declaração*/
const mult = function mult(z, ç) {      // Pouquíssimo utilizada
  return z * ç
}
console.log(mult(2, 4));