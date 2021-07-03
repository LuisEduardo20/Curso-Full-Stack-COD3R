// É um meio de chamar uma função passando parâmetros
// e o contexto em que ela vai ser chamada

function getPreco(imposto = 0, moeda = 'R$') {
  //console.log(this.preco);
  //console.log(this.desconto);
  return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desconto: 0.15,
  getPreco
}

global.preco = 1500
global.desconto = 0.1

console.log(getPreco());
console.log(produto.getPreco())

const carro = {preco: 25000, desconto: 0.15}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//console.log(getPreco.call(carro, 0.1, '$'));
//                         (contexto, parâmetro, parâmetro)
console.log(getPreco.call(carro, 0.1, '$'));
//console.log(getPreco.apply(carro, [0.1, '$']));
//                         (contexto, parâmetro, parâmetro)  Necessita ser passado em uma string
console.log(getPreco.apply(carro, [0.1, '$']));