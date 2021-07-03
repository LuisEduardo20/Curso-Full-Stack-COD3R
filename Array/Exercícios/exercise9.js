// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
// o segundo será o número de vezes que haverá repetição. Um array será retornado.

const repeatElement = (el1, el2) => {
  let newArray = [];

  for(let i = 0 ; i < el2 ; i++) {
    newArray.push(el1);
  }

  return newArray;
}

console.log(repeatElement('maça', 2));
console.log(repeatElement(2, 2));
console.log(repeatElement(7, 3));