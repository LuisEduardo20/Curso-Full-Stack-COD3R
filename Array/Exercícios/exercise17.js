// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

function somarNumeros(numberList) {
  return numberList.reduce( (acumulador, atual) => { return acumulador + atual }, 0);
}

console.log(somarNumeros([25, 3, 5, 7]));