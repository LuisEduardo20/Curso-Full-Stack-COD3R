// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

// MINHA SOLUÇÃO
/*function onlyIndexAndNumberPar(array) {
  let onlyPars = [];

  for(let i in array) {
    if(array[i] % 2 == 0 && i % 2 == 0)
      onlyPars.push(array[i]);
  }

  return onlyPars;
}*/

// OUTRA SOLUÇÃO
function onlyIndexAndNumberPar(array) {
  return array.filter((elemento , indice) => {
    return elemento % 2 == 0 && indice % 2 == 0
  })
}

console.log(onlyIndexAndNumberPar([1, 2, 3, 4]));
console.log(onlyIndexAndNumberPar([10, 70, 22, 43]));