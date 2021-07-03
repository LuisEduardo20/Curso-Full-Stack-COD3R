// Criar uma função que receba um array de números e retorne o menor número desse array.

function menorNumero(numbers) {
  let menor = numbers[0];

  numbers.forEach( num => num < menor ? menor = num : menor = menor );

  // MÉTODO VÁLIDO TAMBÉM
  /*numbers.forEach((num) => {
    if(num < menor)
      menor = num;
  })*/

  // Forma com o Reduce
  // return numbers.reduce( (anterior, atual) => anterior < atual ? anterior : atual )

  return menor;
}

console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))