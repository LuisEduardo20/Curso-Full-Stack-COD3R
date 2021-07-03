// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

let maiorOuMenor = function (num1, num2) {
  if(num1 == num2)
    return 'Os números são iguais'
  return num1 > num2 ? 'O primeiro é maior' : 'O segundo é maior'
}

console.log(maiorOuMenor(1, 2))
console.log(maiorOuMenor(5, 2))
console.log(maiorOuMenor(10, 10))