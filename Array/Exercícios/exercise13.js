// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

function filtraNumeros(array) {
  // Minha solução
  let numberArray = array.filter((el) => {
    return Number.isInteger(el);
  })

  return numberArray;

  // Simplificado
  /**
   * return array.filter( el => typeof item === "number");
   */
}

console.log(filtraNumeros([1, 5, "azul", "7", 25]));
console.log(filtraNumeros(["Javascript", 1, "3", "Web", 20]));