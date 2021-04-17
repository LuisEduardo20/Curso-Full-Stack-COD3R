const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
  // Função dentro de um parâmetro da função
  console.log(operacao(a, b));
}

imprimirResultado(1, 2);
imprimirResultado(1, 2, soma);
imprimirResultado(1, 3, function (x, y) {  // A function dentro do parâmetro sobrescreve a anterior
  return x - y;
});
imprimirResultado(3, 4, (x ,y) => x * y);  // Mesma coisa aqui

const pessoa = {
  falar: function () {
    console.log('Opa!');
  }
  /*  Também funciona!
  falar() {
    console.log('Opa!');
  }
  */
}

pessoa.falar()