/*
Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/

function totalExpenses(productsBougth) {
  return productsBougth.map( element => element.price).reduce( (acumulator, actual) => {
    return acumulator + actual;
  })
}

console.log(totalExpenses([
  {name: "Jornal online", category: "Informação", price: 89.99},
  {name: "Cinema", category: "Entreterimento", price: 150},
]));

console.log(totalExpenses([
  {name: "Galaxy S20", category: "Eletrônicos", price: 3599.99},
  {name: "Macbook Pro", category: "Eletrônicos", price: 30999.90},
]));