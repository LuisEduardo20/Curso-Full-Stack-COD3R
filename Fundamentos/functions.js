// Função sem retorno
function imprimeSoma(a, b) {
  console.log(a + b);
}

imprimeSoma(2, 3);                        // 5
imprimeSoma(2);                           // NaN
imprimeSoma(2, 3, 4, 5, 6, 87, 9, 14);    // 5
imprimeSoma();                            // NaN

// Função com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));                  // 5
console.log(soma(2));                     // 3

// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
  return a + b;
}

// Retorno implicito
const subtracao = (a, b) => a - b

const imprimir2 = a => console.log(a);
imprimir2('Que legal!!')