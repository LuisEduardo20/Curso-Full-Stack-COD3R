// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array

function receberPrimeiroEUltimo(lista) {
  let firstAndLast = [lista[0]];

  for(i in lista) {
  }

  firstAndLast.push(lista[i]);

  return firstAndLast;

}

console.log(receberPrimeiroEUltimo([7, 4, "Olá"]));
console.log(receberPrimeiroEUltimo(["123", 4, 32, 7, 'sete']));