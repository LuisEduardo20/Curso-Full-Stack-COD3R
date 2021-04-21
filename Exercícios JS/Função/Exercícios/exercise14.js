/**
 * 14)​Crie uma estrutura condicional switch que receba uma string com o nome de uma 
 * fruta e que possua trêscasos: Caso maçã, retorne no console: “Não vendemos esta 
 * fruta aqui”. Caso kiwi, retorne: “Estamos comescassez de kiwis”. Caso melancia, 
 * retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções 
 * .Crietambém um default, que retornará uma mensagem de erro no console.
 */

function mercado(fruta) {
  switch(fruta) {
    case 'maça':
      return 'Nâo vendemos esta fruta aqui'
    case 'kiwi':
      return 'Estamos com escassez de kiwis'
    case 'melancia':
      return 'Aqui está, são 3 reais o quilo'
    default:
      return 'Erro'
  }
}

console.log(mercado('maça'))
console.log(mercado('kiwi'))
console.log(mercado('melancia'))
console.log(mercado('banana'))