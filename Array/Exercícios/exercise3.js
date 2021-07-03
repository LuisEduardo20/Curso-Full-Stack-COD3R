// Desenvolva uma função que receba dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário num mês
// e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$ X", em que X é o quanto
// o funcionário ganhou no mês

function salarioFuncionario(horasTrabalhadas, qtdPorHora) {
  console.log(`Salário igual a R$ ${horasTrabalhadas * qtdPorHora}`)
}

salarioFuncionario(150, 40.5)