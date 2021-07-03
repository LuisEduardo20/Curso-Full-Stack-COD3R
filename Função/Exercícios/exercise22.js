/**
 * 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
 * parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A
 * anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
 * compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

function jurosAnuidade(mes) {
  let mensalidade = 100
  let valor = 0
  for(let i = 1 ; i < 13 ; i++) {
    if (i === mes) {
      valor = mensalidade * ((1 + (5 / 100)) ** (mes - 1))
    }
  }
  console.log(`O valor a ser pago é R$ ${valor.toFixed(2)}`)
}

jurosAnuidade(4)